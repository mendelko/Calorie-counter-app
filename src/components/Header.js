import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import arrow from "./arrow.png"
import firebase from "firebase";
import {auth} from "./fire";


function Header() {

    const history = useHistory()
    const url = window.location.href

    function takeHome(){
        history.push("/")
    }

        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider()
            auth.signInWithPopup(provider)
        }

    return (
         <>
         <div className="header">
             <div className="links">
                {url == "http://localhost:3000/main" ? <img className="arrow" onClick={takeHome} src={arrow}></img> : <Link to="/main">Track Your Calorie Intake</Link>}
            </div>
            <h2>
                Calorie Counter
            </h2>
            <button onClick={signInWithGoogle}>Sign In</button>
         </div>
        </>
    )
}

export default Header
