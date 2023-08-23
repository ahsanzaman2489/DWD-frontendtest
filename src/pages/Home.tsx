import React, {useContext, useEffect} from 'react';
import 'styles/table.scss'
import {Table} from "../components/table";
import {TableContext} from "../components/context/tableContext";
import {Loading} from "../components/Loading";

const Home = () => {
    const {data, isDataLoading}: any = useContext(TableContext)
    const {todos} = data;
    console.log(isDataLoading)


    return (
        <>
            {todos && <>
                <Table/>
                {isDataLoading && <Loading/>}
            </>}
        </>
    );
}

export default Home;
