'use client'
import "../css/signup.css"
import {useState} from "react";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="sign-up-style">
            <div className="sign-up container">
                <div className={'form-con fit'}>
                    <form>
                        <div className={'input-field'}>
                            <label htmlFor={'email'}>Email Address</label>
                            <input
                                id={'email'}
                                name={'email'}
                                type={'email'}
                            />
                        </div>
                        <div className={'input-field'}>
                            <label htmlFor={'password'}>Password</label>
                            <input
                                id={'password'}
                                name={'password'}
                                type={'password'}
                            />
                        </div>
                        <button className={"auth-btn"} type="submit" disabled={loading}>
                            {loading ? <div className="loader"></div> : 'Log In'}
                        </button>
                    </form>
                    <div>
                        <p>
                            Don't have an account? <a href={'/signup'}>Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
}