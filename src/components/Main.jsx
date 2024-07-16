import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';
import Todo from './Todo';
import { Link } from 'react-router-dom';
import DateTime from './DateTime';

const Main = () => {
    const { data } = useContext(TodoContext);

    const todoElements = data.map((todo, index) => (
        <Todo key={index} data={todo} />
    ));

    return (
        <main className="main section">
            <div className="container flex flex-col justify-center items-center relative">
                {data.length <= 0 && <p>No todo available</p>}

                <div
                    className="todos flex flex-col gap-9 home-resize"
                    onDragOver={(event) => event.preventDefault()}
                >
                    {todoElements}
                </div>

                <div className="home-resize bg-red-300 fixed bottom-5">
                    <Link to="/todo-app/new-todo">
                        <button
                            className={
                                data.length <= 0
                                    ? 'w-7 h-7 rounded-full bg-slate-700 text-slate-50 absolute right-5 bottom-5 transition hover:scale-110 opacity-90 hover:opacity-100 showcase'
                                    : 'w-7 h-7 rounded-full bg-slate-700 text-slate-50 absolute right-5 bottom-5 transition hover:scale-110 opacity-90 hover:opacity-100'
                            }
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Main;
