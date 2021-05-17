import { useContext } from 'react'
import './style.css'
import CounteContext from '../../context/counteStore'

export default function Navbar() {
    let {counterState } = useContext(CounteContext)
    return (
       <div className="Navbar">
           <h1> Navbar </h1>
           <p className='counterValue'>{counterState.counterValue }</p>
       </div>
    )
}