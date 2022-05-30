import React from "react";
import "./dashboard.css"
import notify from "./notification.png"
import prof from "./Jack.png"
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        auth.logout()
        navigate('/')
    }
    return(
        <div className="dashboard">

            <div className="left-vbar">
                
                <div className="ltit">Dashboard</div>
                <div className="logout" onClick={logout}>logout</div>
            </div>

            <div className="right-bar">

                <div className="r-topbar">
                    <div className="nav-right">
                        <img src={notify} alt="notify"/>
                        <img src={prof} className="user-icon" alt="profile"/>
                    </div>    
                </div>
                <div className="rbottom">
                    <div className="rb-dash">This is Sample Dashboard Page</div>
                    </div>
            </div>
           
        
        </div>
        
    )
}

export default Dashboard