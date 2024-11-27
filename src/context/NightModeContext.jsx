import { useContext, createContext, useState } from "react";

const NightModeContext = createContext();

export const NightModePorvider = ({ children }) => {
    const [isNightMode, setIsNightMode] = useState(true);
    
    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
    };
    
    return (
        <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
            {children}
        </NightModeContext.Provider>
    );
}

export const useNightMode = () => useContext(NightModeContext);