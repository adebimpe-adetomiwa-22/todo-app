import { createContext, useState } from 'react';
import GetData from './GetData';

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [data, setData] = useState(GetData());

    const value = {
        data,
        setData,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export default TodoContextProvider;
