import React, {useState} from 'react';

const infoSignIn = {
    username: "",
    password: ""
}



export default function SignIn () {
    const[userInfo, setUserInfo] = useState({infoSignIn});

    const handleChange = e => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        setUserInfo({infoSignIn}) 
    }

    return (
    <form  onSubmit ={handleSubmit}>
        <input type='text' name="username" placeholder="Enter username"  onChange ={handleChange} value={userInfo.username}/>
        <input type='password' name="password" placeholder="password" onChange ={handleChange} value={userInfo.password} />
        <button type='submit'>Sign in</button>
    </form>
    )

}