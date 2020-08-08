import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State
const initialState = {
    transactions:[
        {id: 1 , text: 'flower', amount: -100},
        {id: 2 , text: 'salary', amount: 180},
        {id: 3 , text: 'book', amount: -300},
        {id: 4 , text: 'camera', amount: 450}
    ]
}

// Create Context 
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider =({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return(
        <GlobalContext.Provider
        value={{transactions:state.transactions}}
        >
            {children}
        </GlobalContext.Provider>
    )
}


