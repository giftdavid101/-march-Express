'use client';

import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between bg-blue-500 text-white py-4 md:px-10 ">
            <div className="ml-10 md:ml-20">
                <Link href="/" legacyBehavior>
                    <a className="text-lg font-bold">MarchEx</a>
                </Link>
            </div>
            <ul className={`md:hidden ${isOpen ? 'flex flex-col fixed top-20 left-0 w-full h-64 bg-blue-500 text-white py-4 overflow-y-auto' : 'hidden'} flex-col items-center nav-modal`}>
                <li className="ml-4">
                    <Link href="/Home" legacyBehavior>
                        <a className="block">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About" legacyBehavior>
                        <a>About</a>
                    </Link>
                </li>
                <li className="ml-4">
                    <Link href="/Products" legacyBehavior>
                        <a className="block">Shop</a>
                    </Link>
                </li>
            </ul>
            <ul className="md:flex hidden md:items-center md:space-x-4">
                <li className="ml-4">
                    <Link href="/Home" legacyBehavior>
                        <a className="block">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About" legacyBehavior>
                        <a>About</a>
                    </Link>
                </li>
                <li className="ml-4">
                    <Link href="/Products" legacyBehavior>
                        <a className="block">Shop</a>
                    </Link>
                </li>
                <li className="ml-4">
                    <Link href="/Signup" legacyBehavior>
                        <a className="block">Sign Up</a>
                    </Link>
                </li>
                <li className="ml-4">
                    <Link href="/Signin" legacyBehavior>
                        <a className="block">Sign In</a>
                    </Link>
                </li>
            </ul>
            <button className="md:hidden flex justify-end mr-10" onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;