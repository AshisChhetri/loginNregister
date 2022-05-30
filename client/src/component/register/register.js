import React, { useState } from "react";
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [ user,setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    })
    var terms=false
    const checkHandle = e => {
        terms=e.target.checked

    }  

    const handleChange= e => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        const {fname, lname, email, password} = user;
        if ( fname && lname && email && password ){
            if(terms){
                axios.post("http://localhost:9002/register",user)
            .then(res => {console.log(res)
            navigate('/login')}
            )
            } else {
                alert("Terms & Conditions Not Accepted");
            }
            
        } else {
            alert("invalid input");
        }
        
    }
    
    const login = () => {
        navigate('/login')
    }
    


    return(
        <div className="register">
            <div className="h1">Create a new account</div>
            <div className="signupInfo">Use your email to create a new account</div>        
            <div className="forms-fields">
                <input className="forms-inputs" type="text" name="fname" value={user.fname} placeholder="First Name" onChange={handleChange}/>            
                <input className="forms-inputs" type="text" name="lname" value={user.lname} placeholder="Last Name" onChange={handleChange}/>
                <input className="forms-inputs" type="text" name="email" value={user.email} placeholder="Email Address" onChange={handleChange}/>
                <input className="forms-inputs" type="password"name="password" value={user.password}  placeholder="Password" onChange={handleChange}/>
            
                <div className="pd-10">
                    <input className="checkbox"type="checkbox" onChange={checkHandle}/>
                    <div className="dif">I have read the <div className="hyperlink"><u>Terms and Conditions</u></div></div>
                </div>
            </div>
            <div className="forms-fields"><div className="button" onClick={register}>Sign Up Now</div></div>
            <div className="forms-fields pd-10 dif">Don't have account?<div className="hyperlink" onClick={login}>Sign In</div></div>
        </div>
    )
}

export default Register