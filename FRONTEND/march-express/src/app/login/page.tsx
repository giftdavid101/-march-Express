'use client'
import "../css/signup.css"
import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:3000/api/v1/user/login', loginFormData);
            console.log('User logged in:', response.data);

            // Save the token to localStorage or state management solution
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            alert('Login successful!');

            // Set the Bearer token for subsequent API requests
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

            // Navigate to the dashboard page after successful login
            await router.push('/shop');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error('Error response:', error.response.data);
                    alert(`Login failed: ${error.response.data.detail || 'Please try again.'}`);
                } else if (error.request) {
                    console.error('Error request:', error.request);
                    alert('Login failed: No response from server. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    alert('Login failed: An unknown error occurred. Please try again.');
                }
            } else {
                console.error('Unknown error:', error);
                alert('Login failed: An unknown error occurred. Please try again.');
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="sign-up-style">
            <div className="sign-up container">
                <div className={'form-con fit'}>
                    <form onSubmit={handleSubmit}>
                        <div className={'input-field'}>
                            <label htmlFor={'email'}>Email Address</label>
                            <input
                                id={'email'}
                                name={'email'}
                                type={'email'}
                                value={loginFormData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'input-field'}>
                            <label htmlFor={'password'}>Password</label>
                            <input
                                id={'password'}
                                name={'password'}
                                type={'password'}
                                value={loginFormData.password}
                                onChange={handleChange}
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