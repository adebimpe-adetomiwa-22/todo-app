import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoContext } from '../components/TodoContext';

const EditTodo = () => {
    const { todoId } = useParams();
    const navigate = useNavigate();
    const { data, setData } = useContext(TodoContext);
    const [submitted, setSubmitted] = useState(false);

    const findTodo = () => {
        const todo = data.find((todo) => todo.id == todoId);
        return todo;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setData((prevData) =>
            prevData.map((item) => (item.id == todo.id ? todo : item))
        );

        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            try {
                localStorage.setItem('todo', JSON.stringify(data));
                navigate('/todo-app');
                setSubmitted(false);
            } catch (error) {
                console.log(error);
            }
        }
    }, [submitted]);

    const [todo, setTodo] = useState(findTodo);
    return (
        <section className="edit-todo">
            <div className="container section flex justify-center items-center">
                <form className="form home-resize" onSubmit={handleSubmit}>
                    <div className="form-content">
                        <textarea
                            className=" p-2 border border-slate-400 rounded-md outline-none w-full min-h-40 text-sm sm:text-base"
                            value={todo.todo}
                            name="todo"
                            id="todo"
                            onChange={(event) =>
                                setTodo((prevTodo) => ({
                                    ...prevTodo,
                                    todo: event.target.value,
                                }))
                            }
                        ></textarea>
                    </div>
                    <div className="form-content flex items-center gap-2 mt-5">
                        <label
                            htmlFor="completed"
                            className="text-sm sm:text-base"
                        >
                            Completed
                        </label>
                        <input
                            type="checkbox"
                            name="completed"
                            id="completed"
                            checked={todo.completed}
                            onChange={(event) =>
                                setTodo((prevTodo) => ({
                                    ...prevTodo,
                                    completed: event.target.checked,
                                }))
                            }
                        />
                    </div>
                    <div className="form-content mt-7 bg-red-200">
                        <button className="bg-slate-700 text-slate-50 w-full py-1 rounded-md transition hover:opacity-90 text-sm sm:text-base">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditTodo;
