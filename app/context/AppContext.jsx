'use client'
import { createContext, useContext } from "react"
import { useState } from "react";

const AppContext = createContext(null);

export function AppProvider({children}){
    const [code, setCode] = useState(null);

    return(
        <AppContext.Provider value={[code,setCode]}>
            {children}
        </AppContext.Provider>
    )
}

export const useCode = () => useContext(AppContext)