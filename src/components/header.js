import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
