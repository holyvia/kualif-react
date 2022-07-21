import { createContext, useContext, useEffect, useState } from "react"

export const THEME = {
    light:{
        background:"#ececec",
        fontColor:"#000000",
        secColor:"#ffffff"
    },
    dark:{
        background:"#383838",
        fontColor:"#ffffff",
        secColor:"#4b4c4d"
    },
    default:{
        background:"#bfe0ff",
        fontColor:"#393939",
        secColor:"#ffdab3"
    }
}

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) =>{

    const [curTheme,setCurTheme] = useState(THEME.default)

    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(THEME.default))
    },[])

    return(
    <ThemeContext.Provider value={{curTheme, setCurTheme}}>
        {children}
    </ThemeContext.Provider>

    )
}

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

