import {useEffect, useState} from "react";


export const useSearch = (data) => {
    const [tableData, setTableData] = useState(data);

    const handleSearchData = (searchTerm) => {
        if (searchTerm === '') {
            setTableData(data);
            return;
        }
        const newFilteredData = data.filter((item) => item.todo.toLowerCase().includes(searchTerm.toLowerCase()))
        setTableData(newFilteredData);
    };

    useEffect(() => {
        setTableData(data)
    }, [data])

    return {filteredData: tableData, handleSearchData};
};