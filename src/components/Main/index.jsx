
import Content from '../Content'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './style.css'
import {CounterContextProvider} from '../../context/counteStore.jsx'

export default function Main() {
   

    return (
        <CounterContextProvider >
        <div className='main-container'>
            <Navbar />
            <div className='sidebar-content'>
                <Sidebar>
                    <div>
                      <h1> First Content </h1>
                    </div>
                    <div>
                      <h2> Second Content </h2>
                    </div>
                    <div>
                      <h3> Third Content </h3>
                    </div>
                </Sidebar>
                <Content />
            </div>
        </div>
        </CounterContextProvider> 
    )
}