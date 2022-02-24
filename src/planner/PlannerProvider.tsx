import React, { createContext, useContext, useState } from "react"
import type { FC } from "react"

export const initPlannerState: PlannerDataType = {
    date: new Date().toISOString().slice(0, 10),
    dDay: -1,
    fireCount: 0,
    targetTime: 0,
    totalTime: 0,
    timeRate: 0,
    taskRate: 0,
    comment: '',
    tasks: [],
    timestamps: [],
    evaluation: ''
}

export type PlannerContextType = {
    isStart: boolean,
    setStart,
    currentModal: number,
    setCurrentModal,
    data: PlannerDataType,
    setData,
    currentTaskId: number,
    setCurrentTaskId,
    totalTime: number,
    taskTotalTime: number,
    TASKEDITMODAL_selectedTask: TaskType,
    setTASKEDITMODAL_selectedTask
}

const defaultContext = {
    isStart: false,
    setStart: undefined,
    currentModal: -1,
    setCurrentModal: undefined,
    data: initPlannerState,
    setData: undefined,
    currentTaskId: -1,
    setCurrentTaskId: undefined,
    totalTime: 0,
    taskTotalTime: 0,
    TASKEDITMODAL_selectedTask: {
        title: '',
        status: 0,
        totalTime: 0,
        taskId: 0,
        color: '#000'
    },
    setTASKEDITMODAL_selectedTask: undefined
}

export const STARTINGMODAL = 0, STOPPINGMODAL = 1, TASKADDMODAL = 2, TASKEDITMODAL = 3

const ContextOfPlanner = createContext<PlannerContextType>(defaultContext)

export const PlannerProvider: FC<{}> = ({ children }) => {
    const [isStart, setStart] = useState(false)
    const [currentModal, setCurrentModal] = useState(-1)
    const [data, setData] = useState(initPlannerState)
    const [currentTaskId, setCurrentTaskId] = useState(-1)
    const [TASKEDITMODAL_selectedTask, setTASKEDITMODAL_selectedTask] = useState({
        title: '',
        status: 0,
        totalTime: 0,
        taskId: 0,
        color: '#000'
    })
    let totalTime = 0, taskTotalTime = 0
    const value = {
        isStart, setStart, currentModal, setCurrentModal, data, setData,
        currentTaskId, setCurrentTaskId, totalTime, taskTotalTime,
        TASKEDITMODAL_selectedTask, setTASKEDITMODAL_selectedTask
    }
    return <ContextOfPlanner.Provider value={value}>
        {children}
    </ContextOfPlanner.Provider>
}

export const useContextOfPlanner = () => {
    return useContext(ContextOfPlanner)
}







// types

export type PlannerDataType = {
    date: string,
    dDay: number,
    fireCount: number,
    targetTime: number,
    totalTime: number,
    timeRate: number,
    taskRate: number,
    comment: string,
    tasks: TasksType,
    timestamps: TimeStampsType,
    evaluation: string
}

export type TasksType = {
    subject: string,
    tasks: TaskType[]
}[]

export type TaskType = {
        title: string;
        status: number;
        totalTime: number;
        taskId: number;
        color: string
    }

export type TimeStampsType = {
    timestampId: number;
    startTime: string;
    endTime: string;
    color: string;
}[]