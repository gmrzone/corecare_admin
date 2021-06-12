import { createContext, useState } from 'react'

const SideDrawerContext = createContext()

const SideDrawerProvider = ({ children }) => {
    const [sideDrawerActive, setSideDrawerActive] = useState(false)
    const toggleSideDrawer = () => {
        setSideDrawerActive(s => !s)
    }
    return (
        <SideDrawerContext.Provider value={{ sideDrawerActive, toggleSideDrawer }}>
            { children }
        </SideDrawerContext.Provider>
    )
}

export { SideDrawerContext, SideDrawerProvider }