// 'use client';
//
//
// import Link from 'next/link';
// import { useState } from 'react';
// import "../../css/nav.css"
// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//
//     return (
//         <nav className="navbar">
//             <div className="nav-con container">
//                 <div className="navbar-brand">
//                     <Link href="/">MarchEX</Link>
//                     <button
//                         className="menu-toggle"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         aria-label="Toggle menu"
//                     >
//                         ☰
//                     </button>
//                 </div>
//                 <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/shop">Shop</Link>
//                     </li>
//                     <li>
//                         <Link href="/login">Login</Link>
//                     </li>
//                     <li>
//                         <Link href="/cart">Cart</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
'use client';

import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import "../../css/nav.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser({}); // Reset user state
    };

    const getInitials = (name) => {
        const names = name.split(' ');
        return names[0][0] + names[names.length - 1][0];
    };

    return (
        <nav className="navbar">
            <div className="nav-con container">
                <div className="navbar-brand">
                    <Link href="/">MarchEX</Link>
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                    {isLoggedIn ? (
                        <div className="user flex items-center space-x-4">
                            <li>
                                <div className="user-initials bg-yellow-500 rounded-full text-white w-10 h-10 flex items-center justify-center">
                                    {getInitials(user.name)}
                                </div>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-400 transition-colors"
                                >
                                    Logout
                                </button>
                            </li>
                        </div>

                    ) : (
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;