import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="header">
            <div className="logo">
                Lee<br/>
                <span className="c_blue">S</span>eon<br/>
                <span className="c_blue">Haeng</span>.
                <p>이선행.</p>
            </div>
            <nav className="gnb">
                <ul>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;