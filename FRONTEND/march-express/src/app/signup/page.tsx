'use client'
import "../css/signup.css"
import {useState} from "react";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="sign-up-style">
                <div className="sign-up container">
                    <div className={'form-con'}>
                        <form>
                            <div className={'input-field'}>
                                <label htmlFor={'full_name'}>Full Name</label>
                                <input
                                    id={'full_name'}
                                    name={'full_name'}
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'email'}>Email Address</label>
                                <input
                                    id={'email'}
                                    name={'email'}
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'username'}>User Name</label>
                                <input
                                    id={'username'}
                                    name={'username'}
                                />
                            </div>
                            <div className={'input-field password-container'}>
                                <label htmlFor={'password'}>Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id={'password'}
                                    name={'password'}
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                {showPassword ? 'Hide' : 'Show'}
              </span>
                            </div>
                            <div className={'input-field password-container'}>
                                <label htmlFor={'confirm_password'}>Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id={'confirm_password'}
                                    name={'confirm_password'}
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </span>
                            </div>

                            <button className="auth-btn" type="submit" disabled={loading}>
                                {loading ? <div className="loader"></div> : 'Sign up'}
                            </button>
                        </form>
                        <div>
                            <p>
                                Have an account? <a href={'/login'}>Log in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}