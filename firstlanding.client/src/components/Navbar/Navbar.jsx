import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

export function Navbar() {
    return (
        
        <div className="Navbar">
                <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/app">App</Link></li>
      </ul>
    </nav>
            <div className="UserProfile">
                <div className="ProfileIconWrapper">
                    <div className="ProfileIcon">
                        <div className="Ellipse"></div>
                        <img src="https://i.postimg.cc/JnsSvVvV/image.png" alt="Profile" />
                    </div>
                </div>
                <div className="ProfileIcon"></div>
            </div>
            <div className="TimeWrapper">
                {/* Add content here if needed */}
                <div className="Date">30.05.2024</div>
                <div className="Time">12:10</div>
                <img src="https://i.postimg.cc/dQx0SrHg/image.png" className="Icon" alt="" />
                {/* <img src="https://i.postimg.cc/pTMfj38Y/image.png" className="Icon" alt="" /> */}
                

            </div>
            
        </div>
    )
}
