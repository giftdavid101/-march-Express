'use client';


import Link from 'next/link';
import { useState } from 'react';
import "../../css/nav.css"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
