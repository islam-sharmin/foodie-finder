import { useContext } from "react";
import reservation from "../../assets/reservation.png";
import { AuthContext } from "../../providers/AuthProvider";
import moment from 'moment';
import { Helmet } from "react-helmet-async";

const Reservation = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <Helmet>
            <title>Foodie Finder | Reservation</title>
            </Helmet>
            <div className="bg-green-50 p-5">
                <h2 className="text-xl text-center text-green-700 font-bold">Restaurant Reservation Record</h2>
            </div>
            <div className="flex justify-center mt-8 mb-8">
                <img src={reservation} alt="" />
            </div>
            <div className="flex gap-24 justify-center items-center">
            <div className="space-y-1 text-center">
                    <h2 className="font-bold text-green-700">Full Name</h2>
                    <p>{user.displayName}</p>
                </div>
                <div className="space-y-1 text-center">
                <h2 className="font-bold text-green-700">Email</h2>
                    <p>{user.email}</p>
                </div>
            </div>
            <p className="text-center mt-8 mb-8"><span className="text-lg font-bold text-green-700">Date: </span>{ moment().format("dddd, MMMM Do YYYY")}</p>
            <div className="border-b-4 border-green-700"></div>
            <div className="text-center space-y-1 mt-6 mb-12">
                <h2 className="text-lg font-bold text-green-700">Any Special Request?</h2>
                <p>Please be early</p>
            </div>
        </div>
    );
};

export default Reservation;