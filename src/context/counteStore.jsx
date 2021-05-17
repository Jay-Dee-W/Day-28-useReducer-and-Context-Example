import { createContext, useReducer } from "react";

let CounterContext = createContext({
    counterValue: 0
})

export default CounterContext;

export function CounterContextProvider(props) {
    let initialState = { counterValue: 0 }
    let reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return { counterValue: state.counterValue + 1 }
            case 'decrement':
                return { counterValue: state.counterValue - 1 };
            default:
                throw new Error('Wrong Action')
        }
    }

    let [counterState, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={{
            counterState,
            dispatch
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}

