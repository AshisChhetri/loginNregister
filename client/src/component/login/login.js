import React,{ useState } from "react";
import "./login.css"
import axios from "axios";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const [ user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange= e => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value 
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message);
            if(res.data.user){
                auth.login(res.data.user)
                navigate('/Dashboard')
            }
        })
    }
    const register = () => {
        navigate('/register')
    }

    return(
        <div className="login">
            <div><h1>Sign in</h1></div>
            <div className="forms-par"><span>Email Address</span><input type="text" name="email" value={user.email} onChange={handleChange}/></div>
            <div className="forms-par"><span>Password</span><input type="password" name="password" value={user.password} onChange={handleChange}/></div>
            <div className="button" onClick={login}>Sign In Now</div>
            <div className="info">Don't have account?<div className="hyperlink" onClick={register}>Sign Up</div></div>
        </div>
    )
}

export default Login