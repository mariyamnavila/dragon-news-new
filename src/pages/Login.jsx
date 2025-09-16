import { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signIn } = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center border-b border-b-base-200 pb-5 mx-5">Login your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input bg-base-200 border-none" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input bg-base-200 border-none" placeholder="Enter your password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-primary mt-4">Login</button>
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/auth/register'} className="text-secondary">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;