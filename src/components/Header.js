import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import arrow from "./arrow.png"
import firebase from "firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./fire";


function Header() {

    const [login, setLogin] = useState(false)

    function handleClick(){
        setLogin(!login)
    }

    const history = useHistory()
    const url = window.location.href
    const [user] = useAuthState(auth)
    console.log(user)

    function takeHome(){
        history.push("/")
    }

        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider()
            auth.signInWithPopup(provider)
        }

        const logOut = () => {
            auth.signOut()
            history.push("/")
        }

    return (
         <>
         <div className="header">
             <div className="links">
                {/* {url === "http://localhost:3000/main" ? <img className="arrow" onClick={takeHome} src={arrow} alt="back button"></img> : <Link to="/main">Track Your Calorie Intake</Link>} */}
                {user && url !== "http://localhost:3000/main" ? <Link to="/main">Track Your Calorie Intake</Link> : null}
                {url === "http://localhost:3000/main" && <img onClick={takeHome} className="arrow" src={arrow} alt="back button"></img>}
            </div>
            <h2>
                Calorie Counter
            </h2>
            {!user && <button onClick={signInWithGoogle} className="sign_in_out" >sign In</button>}
            {user && <button onClick={logOut} className="sign_in_out" >Sign Out</button>}
         </div>
        </>
    )
}

export default Header
