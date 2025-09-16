import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png';
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            alert('you logged Out ')
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="flex justify-between my-2">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5 items-center text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                {
                    user ? (
                        <button onClick={handleLogOut} className="btn btn-primary rounded-none px-10">
                            Log Out
                        </button>
                    ) : (
                        <Link to={'/auth/login'} className="btn btn-primary rounded-none px-10">Login</Link>
                    )}

            </div>
        </div>
    );
};

export default Navbar;