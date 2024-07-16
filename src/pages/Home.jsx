import React, { useState } from 'react';
import Main from '../components/Main';

const Home = () => {
    const fetchTodos = () => {
        const allTodos = localStorage.getItem('todos');
        if (allTodos) {
            return JSON.parse(allTodos);
        }
        return false;
    };
    const [todos, setTodos] = useState(fetchTodos);
    return (
        <div className="wrapper">
            <section className="section">
                <div className="container">
                    <Main />
                </div>
            </section>
        </div>
    );
};

export default Home;
