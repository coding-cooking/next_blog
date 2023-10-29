import { Dispatch, SetStateAction, createContext, useContext } from "react";


export type ThemeContextInterface = {
    theme: "light" | "dark"
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}


const ThemeContext = createContext<ThemeContextInterface>({
    theme: "light",
    setTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;