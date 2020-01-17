import React from 'react';
import './header.css';

function Header(){
    return(
        <div className="header">
            <div className="navbar">
                <img className="forbes-logo" src="http://www.presenso.com/wp-content/uploads/2018/02/Forbes-Icon.png" alt="asdf"/>
                <span>Billionaires</span>
                <span>Innovation</span>
                <span>Leadership</span>
                <span>Money</span>
                <span>Business</span>
                <span>Small Business</span>
                <span>Lifestyle</span>
                <span>Lists</span>
                <span>Advisor</span>
                <span>Featured</span>
                <span>Breaking</span>
                <span>More</span>
            </div>
        </div>
    );
}

export default Header;
