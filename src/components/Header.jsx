import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-slate-700 text-slate-50 header section sticky mb-9">
            <div className="container flex items-center justify-between">
                <h2 className="text-2xl font-bold title">Todo App</h2>

                <Link to="/todo-app">
                    <p className="opacity-90 hover:opacity-100 transition home-link">
                        Home
                    </p>
                </Link>
            </div>
        </header>
    );
};

export default Header;
