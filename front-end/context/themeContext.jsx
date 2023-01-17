import react, { useContext, useState } from 'react'
import themes from './themes';

const ThemeContext = react.createContext();
const ThemeUpdateContext = react.createContext();

//Responsible for getting the initial state  
export const useTheme = () => {
    return useContext(ThemeContext)
}

//This Update the state
export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({children}) => {

    const  [selectTheme, setSelectTheme] = useState(0);
    const theme = themes[selectTheme]

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setSelectTheme}>
                { children }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}