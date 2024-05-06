import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {

    const { user, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        console.log(name, photoURL);

        // update profile
        profileUpdate(name, photoURL)
            .then(result => {
                console.log(result.user);
                toast.success('Profile updated successfully')
                setTimeout(() => {
                    navigate('/userprofile');
                }, 1500);
            })
            .catch(error => {
                console.error(error);
                toast.error('try again')
            })
        window.location.reload();
    }

    return (
        <div>
            <Helmet>
                <title>Foodie Finder | Update Profile</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold">Update Your Profile</h2>
            <form onSubmit={handleUpdate} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder={user.photoURL} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-green-600 text-white">Update</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;