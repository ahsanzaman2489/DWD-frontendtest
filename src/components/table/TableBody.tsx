import * as React from 'react';
import {useContext, useState} from "react";
import {TableContext} from "../context/tableContext";
import {useSelector} from "react-redux";
import {Input} from "../Input";
import {isEmpty} from "lodash";
import {toast} from "react-toastify";

export function TableBody({tableData}: any) {
    const {columns, updateTodo, removeTodo}: any = useContext(TableContext)
    const user = useSelector((state: any) => state.user)
    const {role} = user;

    const [editMode, setEditMode]: any = useState({
        show: false
    });
    const [showButtons, setShowButtons]: any = useState({});
    const [values, setValues]: any = useState({});

    const MouseOver = (id: number) => {
        if (!editMode.show) {
            setShowButtons({
                show: true,
                id: id
            })
        }


    }
    const MouseOut = () => {
        if (!editMode.show) {
            setShowButtons({
                show: false,
            })
        }

    }

    const handleEditMode = (id: number) => {

        if (!editMode.show) {
            setValues({})
            setEditMode({
                show: true,
                id
            })
        }
    }

    const handleChange = (e: React.SyntheticEvent) => {
        const element = e.currentTarget as HTMLInputElement;

        setValues((value: any) => {
            return {
                ...value,
                [element.name]: element.value
            }
        })
    }

    const handleCompleteEditMode = (id: number) => {
        if (!isEmpty(values)) {
            updateTodo(id, values, () => {
                setEditMode({
                    show: false,
                    id
                })

                toast('edit successful', {
                    theme: 'colored',
                    type: 'success'
                });

            })
        }
    }


    const handleCancel = () => {
        setEditMode(() => ({
            show: false,
        }))

        setShowButtons(() => ({
            show: false,
        }))
    }

    const handleDelete = (id: number) => {
        removeTodo(id, () => toast('delete successful', {
            theme: 'colored',
            type: 'success'
        }))
    }

    const isEditor = role === 'editor';

    return (
        <tbody>
        {tableData.map((item: any) => {
                if (item.isDeleted) {
                    return null
                }
                return <tr key={item.id + item.todo}>
                    {columns.map(({accessor, id, editable}: any, index: number) =>
                        <td key={accessor + id}
                            {...(isEditor ? {onMouseOver: () => MouseOver(item.id)} : {})}
                            {...(isEditor ? {onMouseOut: () => MouseOut()} : {})}

                        >
                            {editable && editMode.show && editMode.id === item.id ?
                                <Input type={'text'}
                                       value={values[accessor] || item[accessor]}
                                       name={accessor}
                                       onChange={(e) => handleChange(e)}

                                /> : <>{index === columns.length - 1 && role === 'editor' ?
                                    <>
                                        {item[accessor].toString()}
                                        {showButtons.show && showButtons.id === item.id && !editMode.show &&
                                            <>
                                                <i className={`bx bxs-edit icon edit`}
                                                   onMouseOver={() => MouseOver(item.id)}
                                                   onMouseOut={() => MouseOut()} onClick={() => handleEditMode(item.id)}
                                                />

                                                <i className={`bx bxs-trash icon delete`}
                                                   onMouseOver={() => MouseOver(item.id)}
                                                   onMouseOut={() => MouseOut()} onClick={() => handleDelete(item.id)}
                                                />
                                            </>
                                        }

                                        {editMode.show && showButtons.id === item.id &&
                                            <>
                                                <i className={`bx bxs-save icon save`}
                                                   onMouseOver={() => MouseOver(item.id)}
                                                   onMouseOut={() => MouseOut()}
                                                   onClick={() => handleCompleteEditMode(item.id)}
                                                />

                                                <i className={`bx bx-x icon cancel`} onMouseOver={() => MouseOver(item.id)}
                                                   onMouseOut={() => MouseOut()} onClick={() => handleCancel()}
                                                />

                                            </>
                                        }
                                    </>
                                    : item[accessor].toString()}</>
                            }
                        </td>)}
                </tr>
            }
        )}
        </tbody>
    );
};