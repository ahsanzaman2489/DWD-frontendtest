import React, {useContext, useState} from "react";
import {TableContext} from "context/tableContext";

export function TableHead({handleSorting}: any) {
    const {columns}: any = useContext(TableContext)
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor: string) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };


    return (
        <thead>
        <tr>
            {columns.map(({label, accessor, sortable}: any) => {
                const icon = sortable
                    ? sortField === accessor && order === "asc"
                        ? "bxs-up-arrow"
                        : sortField === accessor && order === "desc"
                            ? "bxs-down-arrow"
                            : ""
                    : "";
                return <th key={accessor}
                           onClick={() => {
                               if (sortable) {
                                   handleSortingChange(accessor)
                               }
                           }}
                >{label}
                    <i className={`bx ${icon} icon`}></i>
                </th>;
            })}
        </tr>
        </thead>
    );
};