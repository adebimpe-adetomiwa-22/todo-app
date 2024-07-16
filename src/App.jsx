import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import NewTodo from './pages/NewTodo';

// components
import SharedHomeLayout from './components/SharedHomeLayout';
import EditTodo from './pages/EditTodo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="todo-app" element={<SharedHomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="new-todo" element={<NewTodo />} />
                    <Route path="edit-todo/:todoId" element={<EditTodo />} />
                    <Route
                        path="*"
                        element={
                            <div>
                                Error 404: <h2>Page not found</h2>
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
