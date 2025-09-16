import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState('');

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more than 5 character');
            return
        } else {
            setNameError('')
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user,displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        // console.log(error);
                        setUser(user)
                    })
            })
            .catch((error) => {
                // console.log(error);
                alert(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center border-b border-b-base-200 pb-5 mx-5">Register your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input bg-base-200 border-none"
                            placeholder="Enter your name"
                            required
                        />
                        {
                            nameError && <p className='text-xs text-error'>{nameError}</p>
                        }
                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input bg-base-200 border-none"
                            placeholder="Enter your photo URL"
                            required
                        />
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input bg-base-200 border-none"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input bg-base-200 border-none"
                            placeholder="Enter your password"
                            required
                        />
                        <button className="btn btn-primary mt-4">Register</button>
                        <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/auth/login'} className="text-secondary">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;