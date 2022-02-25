import React, { useReducer, createContext, Dispatch, useContext } from 'react';

export type MissionsType = {
    missionName: string,
    done: boolean,
    missionId: number,
}[]

const initialMissions: MissionsType = [
    {
        missionName: '하루 3시간 이상 국어 공부 매우매우 열심히 하기',
        done: true,
        missionId: 1,
    },
    {
        missionName: '영어 단어 day 3개 이상 ㅇ암기하기',
        done: true,
        missionId: 2,
    },
    {
        missionName: '미적분 모의고사 1회 이상 풀기',
        done: false,
        missionId: 3,
    },
    {
        missionName: '집에가기',
        done: false,
        missionId: 4,
    },
    {
        missionName: '놀러가기',
        done: false,
        missionId: 5,
    },
]

type Action = {
    type: 'TOGGLE',
    id: number,
}
function missionsReducer(state, action) {
    switch (action.type) {
        //   case 'CREATE':
        //     return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(mission =>
                mission.missionId === action.id ? { ...mission, done: !mission.done } : mission
            );
        //   case 'REMOVE':
        //     return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
type MissionsDispatchType = Dispatch<Action>




const MissionsStateContext = createContext<MissionsType | null>(null)
const MissionsDispatchContext = createContext<MissionsDispatchType | null>(null)

export function MissionsProvider({ children }) {
    const [state, dispatch] = useReducer(missionsReducer, initialMissions);
    return (
        <MissionsStateContext.Provider value={state}>
            <MissionsDispatchContext.Provider value={dispatch}>
                {children}
            </MissionsDispatchContext.Provider>
        </MissionsStateContext.Provider>
    )
}

export function useMissionsState() {
    const context = useContext(MissionsStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;

}

export function useMissionsDispatch() {
    const context = useContext(MissionsDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}