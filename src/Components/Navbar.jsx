import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png';
const Navbar = () => {
    return (
        <div className="flex justify-between my-2">
            <div className=""></div>
            <div className="nav space-x-5 items-center text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <button className="btn btn-primary rounded-none px-10">Login</button>
            </div>
        </div>
    );
};

export default Navbar;