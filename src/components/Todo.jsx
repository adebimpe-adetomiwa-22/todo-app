import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import { Link } from 'react-router-dom';

const Todo = ({ data }) => {
    const { data: data2, setData } = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);

    const handleCompleted = () => {
        setData((prevData2) =>
            prevData2.map((todo2) =>
                todo2.id == data.id
                    ? { ...todo2, completed: !todo2.completed }
                    : todo2
            )
        );
        setEdit(true);
    };

    const handleDelete = (event) => {
        setRemove(true);
    };

    useEffect(() => {
        if (remove) {
            try {
                const newData = data2.filter((todo2) => todo2.id != data.id);
                setData(newData);

                localStorage.setItem('todo', JSON.stringify(newData));
                setRemove(false);
            } catch (error) {
                console.log(error);
            }
        }
    }, [remove]);

    useEffect(() => {
        if (edit) {
            const localSave = JSON.stringify(data2);
            try {
                localStorage.setItem('todo', localSave);
                setEdit(false);
            } catch (error) {
                console.log(error);
            }
        }
    }, [edit]);
    return (
        <div
            className={
                data2.find((todo) => todo.id == data.id).completed
                    ? 'todo border-s-4 border-slate-700 shadow-lg shadow-slate-300 min-h-16 p-3 rounded-md grid grid-cols-5 gap-y-5 transition'
                    : 'todo border-s-4 border-slate-300 shadow-lg shadow-slate-300 min-h-16 p-3 rounded-md grid grid-cols-5 gap-y-5 transition'
            }
            onDragOver={(event) => event.preventDefault()}
        >
            <div className="row-span-2 flex justify-center items-center">
                <i
                    className={
                        data2.find((todo) => todo.id == data.id).completed
                            ? 'fas fa-circle-check mark text-xl sm:text-2xl text-slate-300 cursor-pointer active transition'
                            : 'fas fa-circle-check mark text-xl sm:text-2xl text-slate-300 cursor-pointer transition'
                    }
                    onClick={handleCompleted}
                ></i>
            </div>
            <p className="font-semibold col-span-4 w-4/5 truncate text-sm sm:text-base">
                {data.todo}
            </p>
            {data.date || data.time ? (
                <div className="datetime flex items-center gap-3 col-span-3 text-slate-700">
                    <i className="fas fa-stopwatch"></i>
                    {data.date && <small className="date">{data.date}</small>}
                    {data.time && <small className="time">{data.time}</small>}
                </div>
            ) : (
                <div className="datetime flex items-center gap-3 col-span-3 text-slate-700"></div>
            )}
            <div className="edit-delete flex gap-3 justify-end items-center text-slate-700">
                <Link
                    to={`/todo-app/edit-todo/${data.id}`}
                    className="flex justify-center items-center"
                >
                    <i className="cursor-pointer edit fas fa-pen-to-square text-sm"></i>
                </Link>
                <i
                    className="cursor-pointer delete fas fa-trash text-sm"
                    onClick={handleDelete}
                ></i>
            </div>
        </div>
    );
};

export default Todo;
