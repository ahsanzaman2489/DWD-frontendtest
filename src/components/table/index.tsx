// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import {TableHead} from "./TableHead";
import {TableBody} from "./TableBody";
import {useSortingTable} from "hooks/useSortingTable";
import {TableContext} from "context/tableContext";
import Paginate from "./Pagniate";
import {useSelector} from "react-redux";
import {Input} from "../Input";
import {useSearch} from "hooks/useSearch";
import {toast} from "react-toastify";


type Props = {};

export function Table(props: Props) {
    const {data, columns, fetchTodos, addNewTodo, isDataLoading}: any = useContext(TableContext)
    const {todos, total} = data;
    const {filteredData, handleSearchData}: any = useSearch(todos);
    const [tableData, handleSorting]: any = useSortingTable(filteredData, columns);
    const {token} = useSelector((state: any) => state.user)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [postsPerPage] = useState(30);
    const [searchTerm, setSearchTerm] = useState('');
    const [addTerm, setAddTerm] = useState('');
    const [add, setAdd] = useState(false);
    const user = useSelector((state: any) => state.user)

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

    const handleSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setSearchTerm(value);
        handleSearchData(value)
    }

    const clearSearch = () => {
        setSearchTerm('');
        handleSearchData()
    }

    const handleAddChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setAddTerm(value)
    }
    const handleAddDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        if (event.key === 'Enter' && value.length > 0) {
            console.log('enter')

            addNewTodo(value, user.id, () => {
                toast('add successful', {
                    theme: 'colored',
                    type: 'success'
                })

                setAddTerm('')
                setAdd(false)
            })
        }
    }

    useEffect(() => {
        if (!isDataLoading) {
            fetchTodos((postsPerPage * currentPage) - postsPerPage, token)
        }

    }, [currentPage]);

    useEffect(() => {
        setTotalPosts(total)
    }, [total]);

    useEffect(() => {
        handleSearchData(searchTerm)
    }, [data]);

    return (
        <div className={'table-container'}>
            <div className={'search-box'}>
                <div className={'add'}>
                    <Input icon={'bx-message-alt-add'}
                           onClick={() => {
                               if (!add) setAdd(!add)
                           }}
                           onBlur={() => {
                               setAdd(false)
                           }}
                           value={addTerm}
                           onChange={handleAddChange}

                           onKeyDown={handleAddDone}
                           placeholder={'Add new Todo'}
                    />

                    {addTerm.length > 0 && <div>
                        <i className={`bx bx-x icon cancel search`} onClick={() => {
                            setAddTerm('')
                        }}/>
                    </div>}
                </div>
                <Input value={searchTerm} onChange={handleSearch} className={'search'} icon={'bx-search'}
                       placeholder={'Search'}/>
                {searchTerm.length > 0 && <i className={`bx bx-x icon cancel search`} onClick={clearSearch}
                />}
            </div>

            <div className={'table-wrapper'}>
                <table>
                    <TableHead handleSorting={handleSorting}/>
                    {tableData.length > 0 && <TableBody tableData={tableData}/>}
                </table>
            </div>

            {tableData.length === 0 && !isDataLoading && <div className={'no-results'}>No results</div>}
            {tableData.length > 0 && <Paginate
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