import React, { createContext, useContext, useState } from "react"
import type { FC } from "react"

type PlannerContextType = {
    isStart: boolean,
    setStart,
    startingModalVisible: boolean,
    setStartingModalVisible,
    stoppingModalVisible: boolean,
    setStoppingModalVisible
}

const defaultContext = {
    isStart: false,
    setStart: undefined,
    startingModalVisible: false,
    setStartingModalVisible: undefined,
    stoppingModalVisible: false,
    setStoppingModalVisible: undefined
}

const ContextOfPlanner = createContext<PlannerContextType>(defaultContext)

export const PlannerProvider: FC<{}> = ({ children }) => {
    const [isStart, setStart] = useState(false)
    const [startingModalVisible, setStartingModalVisible] = useState(false)
    const [stoppingModalVisible, setStoppingModalVisible] = useState(false)
    const value = { isStart, setStart, startingModalVisible, setStartingModalVisible, stoppingModalVisible, setStoppingModalVisible }
    return <ContextOfPlanner.Provider value={value}>
        {children}
    </ContextOfPlanner.Provider>
}

export const useContextOfPlanner = () => {
    return useContext(ContextOfPlanner)
}