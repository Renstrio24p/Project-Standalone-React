import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logo"></img>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
