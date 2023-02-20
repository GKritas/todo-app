import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}


function LoginComponent() {

    const [username, setUsername] = useState('username')
    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value="gk5121993"/>
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}