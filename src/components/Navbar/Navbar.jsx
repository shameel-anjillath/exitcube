import React from 'react'
import './navbar.css'
import logo from '../../assets/exitcube.png'
import menu from '../../assets/menu.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="icon">
                <img className='logo' src={logo} alt="" />
            </div>
            {/* <div className='burgermenu'>
                <img src={menu} alt="" className='menu' />
            </div> */}
            <div></div>
            <nav className="nav">
                <ul className='list'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Courses
                        <ul className='dropdown'>
                            <li>Web Development</li>
                            <li>IoT Development</li>
                        </ul>
                    </li>
                    <li>About</li>
                </ul>
            </nav>
            <div className="btn">
                <div className="login"><button>Login</button></div>
                <div className="getstarted"><button>Get Started</button></div>
            </div>
        </div>
    )
}

export default Navbar
