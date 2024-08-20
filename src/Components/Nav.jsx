import React from 'react'
import './Nav.css'
import logo from './assets/logo.png'

export default function Nav() {
    return (
        <div>
            <div className="main">
                <div className="logo">
                    <img src={logo} alt="" style={{width:'40%'}}/>
                </div>
                <div className="search">
                    <button type='button'><img src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF" alt="" /></button>
                    <input type="text" placeholder='Search' ></input>
                </div>
                <div className="navlinks">
                    <ul>
                        <a href="">Home</a>
                        <a href="">Cart</a>
                        <a href="">Register</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
