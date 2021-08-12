import React from 'react'
import Header from './Header'
import home from "./home.jpg";


function Home() {

    return (
        <>
        <Header />
        <img alt="Welcome" src={home} className="home_img"></img>
        </>
    )
}

export default Home
