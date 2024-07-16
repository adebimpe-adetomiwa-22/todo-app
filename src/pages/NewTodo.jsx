import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../components/TodoContext';
import { useNavigate } from 'react-router-dom';

const NewTodo = () => {
    const navigate = useNavigate();

    // from context / local-storage
    const { data, setData } = useContext(TodoContext);

    // form data
    const [formData, setFormData] = useState({
        id: Math.round(Math.random() * new Date()),
        todo: '',
        completed: false,
        date: '',
        time: '',
    });

    // error
    const [error, setError] = useState(false);

    // watch submission
    const [submit, setSubmit] = useState(false);

    // change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.todo === '') {
            setError(true);
            return;
        }

        setError(false);
        setData((prevData) => [formData, ...prevData]);
        setSubmit(true);
    };

    useEffect(() => {
        if (submit) {
            try {
                localStorage.setItem('todo', JSON.stringify(data));
                navigate('/todo-app');
            } catch (error) {
                console.log(error);
            }

            // reset submit
            // setSubmit(false);
        }
    }, [submit]);

    return (
        <section className="section new-todo flex justify-center">
            <div className="container w-full sm:w-2/3 md:w-3/5 lg:w-3/6 xl:w-2/5">
                <h2 className="text-xl font-semibold mb-9">Create New todo</h2>
                {error && (
                    <div className="bg-red-200 rounded-sm p-2 todo-error mb-5">
                        <small>Enter what to do!</small>
                    </div>
                )}
                <form className="mt-5 form" onSubmit={handleSubmit}>
                    <div className="form-content flex flex-col gap-5 what-to-do">
                        <label htmlFor="what-to-do">What to do?</label>
                        <input
                            name="todo"
                            type="text"
                            value={formData.todo}
                            className="border-b-2 border-slate-700 rounded-sm outline-none text-sm"
                            onChange={handleChange}
                            placeholder="Meeting with PR department"
                            id="what-to-do"
                        />
                    </div>
                    <div className="form-content flex flex-row items-center gap-2 mt-9 date-time">
                        <div className="flex gap-5">
                            <div className="date flex flex-col gap-2">
                                <label htmlFor="date" className="md:hidden">
                                    Date
                                </label>
                                <input
                                    name="date"
                                    type="date"
                                    id="date"
                                    value={formData.date}
                                    className="border-b-2 border-slate-700 rounded-sm outline-none"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="time flex flex-col gap-2">
                                <label htmlFor="time" className="md:hidden">
                                    Time
                                </label>

                                <input
                                    name="time"
                                    type="time"
                                    id="time"
                                    value={formData.time}
                                    className="border-b-2 border-slate-700 rounded-sm outline-none"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-content mt-12 add-todo">
                        <button className="bg-slate-700 text-slate-50 p-2 rounded-md w-full">
                            Add todo
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewTodo;
