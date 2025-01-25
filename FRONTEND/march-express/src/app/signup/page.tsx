'use client'
import "../css/signup.css"
import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/router";


const router = useRouter()

interface FormData {
    full_name: string;
    email: string;
    username: string;
    password: string;
    confirm_password: string;
}

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        full_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        console.log('Submitting form data:', formData); // Log form data

        try {
            const response = await axios.post('http://127.0.0.1:3000/signup', formData);
            console.log('User signed up:', response.data);
            alert('Sign up successful! Proceed to Login');
            await router.push('/login');
            // Clear input fields
            setFormData({
                full_name: '',
                email: '',
                username: '',
                password: '',
                confirm_password: '',
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error('Error response:', error.response.data); // Log response error
                    alert(`Sign up failed: ${error.response.data.detail || 'Please try again.'}`);
                } else {
                    console.error('Error message:', error.message);
                    alert('Sign up failed: No response from server. Please try again later.');
                }
            } else {
                console.error('Unexpected error:', error);
                alert('Sign up failed: An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="sign-up-style">
                <div className="sign-up container">
                    <div className={'form-con'}>
                        <form onSubmit={handleSubmit}>
                            <div className={'input-field'}>
                                <label htmlFor={'full_name'}>Full Name</label>
                                <input
                                    id={'full_name'}
                                    name={'full_name'}
                                    value={formData.full_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'email'}>Email Address</label>
                                <input
                                    id={'email'}
                                    name={'email'}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={'input-field password-container'}>
                                <label htmlFor={'password'}>Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id={'password'}
                                    name={'password'}
                                    value={formData.password}
                                    onChange={handleChange}
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
                                    value={formData.confirm_password}
                                    onChange={handleChange}
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