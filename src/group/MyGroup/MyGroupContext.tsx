import React, { useReducer, createContext, Dispatch, useContext } from 'react';

export type GroupStateType = {
    groupName: string,
    groupDescription:string,
    groupMembers:{
        uri:string,
        id:number,
    }[],
    groupTimeGoal:number,
    groupAvgStudyTime:number,
    myStudyTime:number,
    maxMember:number,
    groupMissions:{
        id:number,
        value:string,
    }[],
    groupPrivacy:boolean,
    groupNotice:{
        title:string,
        content:string,
    },
}

const initialGroupstate: GroupStateType = {
    groupName:'이건 그룹 이름이야',
    groupDescription:'이건 그룹 설명이고',
    groupMembers:[
        {
            uri:'',
            id:1,
        },
        {
            uri:'',
            id:1,
        },
    ],
    groupTimeGoal:16800000,
    groupAvgStudyTime:1600000,
    myStudyTime:1600000,
    maxMember:98,
    groupMissions:[
        {
            id:0,
            value:'첫번째 미션'
        },
        {
            id:1,
            value:'두번째 미션'
        },
        {
            id:2,
            value:'세번째 미션'
        }
    ],
    groupPrivacy:true,
    groupNotice:{
        title:'이건 공지 제목이야',
        content:'이건 공지 내용이고',
    }
}


type ActionType = {
    type: 'CHANGE_ONE'|'CHANGE_INPUT',
    name:string,
    value:any
}


const groupReducer = (state:GroupStateType, action:ActionType) =>{
    switch (action.type) {
        case 'CHANGE_ONE':
        case 'CHANGE_INPUT':
            return {...state,[action.name]:action.value}
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
type GroupDispatchType = Dispatch<ActionType>




const GroupStateContext = createContext<GroupStateType | null>(null)
const GroupDispatchContext = createContext<GroupDispatchType | null>(null)

export const  GroupProvider = ({ children })=> {
    const [state, dispatch] = useReducer(groupReducer, initialGroupstate);
    return (
        <GroupStateContext.Provider value={state}>
            <GroupDispatchContext.Provider value={dispatch}>
                {children}
            </GroupDispatchContext.Provider>
        </GroupStateContext.Provider>
    )
}

export const useGroupState= () => {
    const context = useContext(GroupStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useGroupDispatch() {
    const context = useContext(GroupDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}