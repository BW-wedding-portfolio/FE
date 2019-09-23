import React, {useState} from 'react';


export default function SignIn () {
    const[userInfo, setUserInfo] = useState({ username: "" , password: ""});

    return (
    <form >
        <input type='text' name="username" placeholder="username" />
        <input type='password' name="password" placeholder="password" />
        <button type='submit'>Sign in</button>
    </form>
    )

}