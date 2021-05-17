import './style.css'

export default function Sidebar(props) {

    return (
        <div className="Sidebar">
        <h1> Sidebar </h1>
        {props.children}
    </div>
    )
}