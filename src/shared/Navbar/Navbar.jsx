import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icon.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/updateprofile" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>Update Profile</NavLink></li>
        {
            user?
            <li><NavLink to="/userprofile" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>User Profile</NavLink></li>
            :
            ''
        }
        {
            user?
            <li><NavLink to="/reservation" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>Reservation</NavLink></li>
            :
            ''
        }
        <li><NavLink to="/contactus" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>Contact Us</NavLink></li>
        {
            user?
            ''
            :
            <li><NavLink to="/register" className={({ isActive }) => isActive ? 'font-bold text-green-600 p-1 border border-green-600 rounded' : 'font-bold'}>Register</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 mt-2 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Link><img className="w-[40px] h-[40px]" src={logo} alt="" /></Link>
                    <h2 to='/' className="text-2xl text-green-700 font-bold">Foodie Finder</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {user ? (
                    <div className="flex items-center gap-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="user pic"
                                className="tooltip tooltip-open tooltip-bottom hover:text-blue-600"
                                src={user?.photoURL || "https://i.ibb.co/p3d9pYn/user.png"}
                                title={user?.displayName || 'user name not fond'}
                            />
                        </div>
                    </div>
                    <Link to="/login"><button onClick={handleLogOut} className="btn bg-green-600 text-white">Log Out</button></Link>
                </div>
                ) : (
                    <Link to='/login' className="btn bg-green-600 text-white">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;