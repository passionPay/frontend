import React, { createContext, useContext, useState } from "react"
import type { FC } from "react"

export type FontSizeContextType = {
    user: {
        token: string,
        username: string
    },
    setUser: any,
    tabbarVisible: boolean,
    setTabbarVisible: any
}

const defaultContext = {
    user: {
        token: '',
        username: ''
    }, setUser: undefined,
    tabbarVisible: true,
    setTabbarVisible: undefined
}

const ContextOfAll = createContext<FontSizeContextType>(defaultContext)

export const Provider: FC<{}> = ({ children }) => {
    const [user, setUser] = useState({
        token: '', username: ''
    })
    const [tabbarVisible, setTabbarVisible] = useState(true)
    const value = { user, setUser, tabbarVisible, setTabbarVisible }
    return <ContextOfAll.Provider value={value}>
        {children}
    </ContextOfAll.Provider>
}

export const useContextOfAll = () => {
    return useContext(ContextOfAll)
}