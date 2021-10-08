import React from 'react'
import './style.css'

function Sidebar(props) {
    console.log(props)
    return (
        <>
        <div className="container">
            <div className="side-nav-ele"><h3>Device Id : <span>{props.data==null ? 'no accident detected' : props.data[0]['device_id']}</span></h3> </div>
            <div className="side-nav-ele"><h3>Latitude :<span>{props.data==null ?  'no accident detected' : props.data[0]['lat']}</span></h3> </div>
            <div className="side-nav-ele"><h3>Longitude : <span>{props.data==null ? 'no accident detected' : props.data[0]['lang']}</span></h3> </div>
            <div className="side-nav-ele"><h3>Vehicle Number : <span>{props.data==null ? 'no accident detected' : props.data[0]['vehicle_no']}</span></h3></div>
            <div className="side-nav-ele"><h3>Developed by : <span>Kunal&#10084;&#65039;</span></h3></div>
            
        </div>
        </>
    )
}

export default Sidebar
