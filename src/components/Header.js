import React from 'react';
import Navigation from './Navigation';

function Header() {
    return(
        <header className="border-b bg-pink-100 p-3 flex justify-between items-center">
            <span className="font-bold">
                Placement Data Information
            </span>
            
            <Navigation />
        </header>
    )
}

export default Header;