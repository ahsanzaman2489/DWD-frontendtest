// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import {TableHead} from "./TableHead";
import {TableBody} from "./TableBody";
import {useSortingTable} from "../../hooks/useSortingTable";
import {TableContext} from "../context/tableContext";
import Paginate from "./Pagniate";
import {useSelector} from "react-redux";
import {Input} from "../Input";
import {useSearch} from "../../hooks/useSearch";


type Props = {};

export function Table(props: Props) {
    const {data, columns, fetchTodos, isDataLoading}: any = useContext(TableContext)
    const {todos, total} = data;
    const [tableData, handleSorting]: any = useSortingTable(todos, columns);
    const {filteredData, handleSearchData}: any = useSearch(todos);
    const {token} = useSelector((state: any) => state.user)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [postsPerPage] = useState(30);
    const [searchTerm, setSearchTerm] = useState('')
    const paginate = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        if (!isDataLoading) {
            fetchTodos((postsPerPage * currentPage) - postsPerPage, token)
        }

    }, [currentPage]);

    const handleSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setSearchTerm(value);
        handleSearchData(value)
    }

    const clearSearch = () => {
        setSearchTerm('');
        handleSearchData()
    }

    useEffect(() => {
        setTotalPosts(total)
    }, [total]);

    useEffect(() => {
        handleSearchData(searchTerm)
    }, [data]);

    return (
        <div className={'table-container'}>
            <div className={'search-box'}>
                <Input value={searchTerm} onChange={handleSearch} className={'search'} icon={'bx-search'}/>
                {searchTerm.length > 0 && <i className={`bx bx-x icon cancel search`} onClick={clearSearch}
                />}
            </div>

            <table>
                <TableHead handleSorting={handleSorting}/>
                {filteredData.length > 0 && <TableBody tableData={filteredData}/>}
            </table>
            {filteredData.length === 0 && <div className={'no-results'}>No results</div>}
            {filteredData.length > 0 && <Paginate
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                currentPage={currentPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
            />}

        </div>
    );
};