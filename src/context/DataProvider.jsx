import { createContext, useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(true);
    const [third, setThird] = useState(true);
    const [html, setHtml] = useLocalStorage("html","");
    const [css, setCss] = useLocalStorage("css","");
    const [js, setJs] = useLocalStorage("js","");

    return (
        <DataContext.Provider
            value={{
                html, setHtml, css, setCss, js, setJs, first, setFirst, second, setSecond, third, setThird
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;