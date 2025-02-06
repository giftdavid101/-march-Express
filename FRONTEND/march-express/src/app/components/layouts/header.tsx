'use client';

import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import { Modal } from 'antd';
import "../../css/nav.css"
import { useContext } from 'react';
import { CartContext } from '../../createContext';
import Image from "next/image";


const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [cartModalVisible, setCartModalVisible] = useState(false);

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
        setUser({});
    };

    const getInitials = (name) => {
        const names = name.split(' ');
        return names[0][0] + names[names.length - 1][0];
    };

    const handleCartClick = () => {
        setCartModalVisible(true);
    };

    const handleCartModalOk = () => {
        setCartModalVisible(false);
    };

    const handleCartModalCancel = () => {
        setCartModalVisible(false);
    };

    return (
        <nav className="navbar">
            < div className="nav-con container">
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
                        <button style={{display:'flex'}} onClick={handleCartClick}>
                            <span>Cart</span>
                            <span>({cartItems.length})</span>
                        </button>
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
            <Modal
                title="Your Cart"
                open={cartModalVisible}
                onOk={handleCartModalOk}
                onCancel={handleCartModalCancel}
            >
                {cartItems.length === 0 ? (
                    <span>Cart is empty!</span>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div style={{display:'flex', gap:8, marginTop:15}} key={item._id}>
                                <div>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <div>
                                    <b>{item.name}</b>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </Modal>
        </nav>
    );
};

export default Navbar;

