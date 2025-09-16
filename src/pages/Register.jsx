import { use } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
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