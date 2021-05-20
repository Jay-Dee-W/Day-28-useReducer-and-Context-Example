import { useContext } from 'react'
import './style.css'
import counteContext from '../../context/counteStore'


export default function Counter() {
    let { counterState, dispatch } = useContext(counteContext)
    console.log(counterState)
    return (
        <div >
           <h2>click to add content </h2>
            <div className="Conter-card">
                <button className='plus' onClick={() => dispatch("increment")}> + </button>
                {counterState.counterValue}
                <button className='minus' onClick={() => dispatch("decrement")}> - </button>
                {counterState.content.map(text => <p> {text} </p>)}
            </div>
        </div>
    )
}