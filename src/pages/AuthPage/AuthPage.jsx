import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

export default function AuthPage({setUser}) {
    const [clicked, setClicked] = useState(true)
    let buttonText = clicked === true ? 'Sign Up' : 'Login'
    function onClick() {
        setClicked(clicked => !clicked )
    }
    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={onClick}>{buttonText}</button>
            { clicked === true ? 
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
        </main>
    )
}