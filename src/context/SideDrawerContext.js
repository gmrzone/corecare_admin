import { createContext, useState } from 'react'

const SideDrawerContext = createContext()

const SideDrawerProvider = ({ children }) => {
    const [sideDrawerActive, setSideDrawerActive] = useState(false)
    const toggleSideDrawer = () => {
        setSideDrawerActive(s => !s)
    }
    const closeDrawer = () => {
        setSideDrawerActive(false)
    }
    return (
        <SideDrawerContext.Provider value={{ sideDrawerActive, toggleSideDrawer, closeDrawer }}>
            { children }
        </SideDrawerContext.Provider>
    )
}

export { SideDrawerContext, SideDrawerProvider }