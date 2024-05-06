import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoURL, email, password)

        // password validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lower case characters.');
            return;
        }


        // create user
        try {
            const result = createUser(email, password, name, photoURL);
            console.log(result.user);
            toast.success('Registration Successfully');
            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {
            console.error("Registration failed:", error.message);
            toast.error('Register failed, please try again');
        }
    }

    return (
        <div>
            <Helmet>
                <title>Foodie Finder | Register</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold">Please Register</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative mb-4">
                        <input
                            className="w-full input input-bordered"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Set your password"
                            id="" required />
                        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-green-600 text-white">Register</button>
                </div>
            </form>
            <p className="text-center mb-4">Already have an account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Register;