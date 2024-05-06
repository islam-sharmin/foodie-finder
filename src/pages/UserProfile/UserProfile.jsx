import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card lg:w-1/2 bg-base-100 shadow-xl mx-auto">
            <Helmet>
            <title>Foodie Finder | User Profile</title>
            </Helmet>
            <figure className="pt-5">
                <img src={user.photoURL} alt="Shoes" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default UserProfile;