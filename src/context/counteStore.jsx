import { createContext, useReducer } from "react";

let CounterContext = createContext({
    counterValue: 0
})

export default CounterContext;

export function CounterContextProvider(props) {
    let initialState = {
        counterValue: 0,
        content: [],
    }
    let reducer = (state, action) => {
        switch (action) {
            case 'increment':
            
                if (state.counterValue >= 0) {
                    return {
                        counterValue: state.counterValue + 1,
                        content: [...state.content,  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, et ea inventore aliquam veniam exercitationem rerum impedit deserunt quaerat magni, similique cumque asperiores sunt dolorum natus soluta quia fuga aperiam atque. Dicta nisi minus enim officiis doloremque, nemo facilis id ab animi facere alias dolores qui magnam accusantium tenetur eum! Incidunt temporibus, pariatur distinctio quo voluptas est perferendis laborum eveniet, praesentium quam eligendi tenetur maxime culpa voluptates ullam, magni fugit doloremque reiciendis eos perspiciatis? Sint ea, tenetur quo distinctio enim blanditiis doloremque repellendus. Rerum laboriosam aut molestiae deleniti fuga iusto deserunt similique ipsam veniam eum! Pariatur iure magnam quaerat quasi. ']
                    }
                }
                    return {counterValue: state.counterValue + 1 , content: [...state.content] }
               
            case 'decrement':
                if (state.counterValue >= 0) {
                    return { counterValue: state.counterValue - 1, content: state.content.filter((_, i) => i !== state.counterValue - 1) };
                } 
                return {counterValue: state.counterValue - 1 , content: [] }
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

