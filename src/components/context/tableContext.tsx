import React, {createContext, useState, PropsWithChildren} from "react";
import {deleteTodo, editTodo, getAllTodos} from "../../services";


type dataType = {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
};

interface contextState {
    todos: Array<dataType>;
    limit: number;
    skip: number;
    total: number;
}


export const TableContext = createContext({});

export const TableProvider: React.FC<PropsWithChildren<unknown>> = ({children}) => {
    const columns = [
        {label: "Id", accessor: "id", sortable: true},
        {label: "Todo name", accessor: "todo", editable: true},
        {label: "completed", accessor: "completed"},
        {label: "user id", accessor: "userId", sortable: true},
    ];

    const [data, setData] = useState<any>({
        todos: [],
    })

    const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

    const fetchTodos = async (skip: keyof contextState, token: string) => {
        setIsDataLoading(true)

        try {
            const response = await getAllTodos({
                headers: {
                    Authorization: 'Bearer ' + token
                },
                params: {
                    skip
                }
            });

            if (response.data) {
                setData(response.data)
                setIsDataLoading(false)
            }
        } catch (e) {
            console.log(e)
            setIsDataLoading(false)
        }

    }

    const updateState = (response: any) => {
        const newData = data.todos.map((item: any) => {
            if (response.data.id === item.id) {
                item = response.data;
                return item;
            } else {
                return item;
            }
        });
        setData((data: any) => {
            return {
                ...data,
                todos: newData
            }
        })
    }


    const updateTodo = async (id: any, dataObj: any, callback: any) => {
        setIsDataLoading(true)
        try {
            const response = await editTodo(dataObj, id);

            if (response.data) {
                updateState(response)
                setIsDataLoading(false)
                callback()
            }
        } catch (e) {
            console.log(e)
            setIsDataLoading(false)
        }

    }

    const removeTodo = async (id: any, callback: any) => {
        setIsDataLoading(true)
        try {
            const response = await deleteTodo(id);
            if (response.data) {
                updateState(response)
                setIsDataLoading(false)
                callback();
            }
        } catch (e) {
            console.log(e)
            setIsDataLoading(false)
        }

    }

    return <TableContext.Provider value={{columns, data, isDataLoading, setData, fetchTodos, updateTodo, removeTodo}}>
        {children}
    </TableContext.Provider>
};