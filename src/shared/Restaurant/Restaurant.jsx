import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Restaurant = ({ restaurant }) => {

    useEffect(() => {
        Aos.init();
    }, []);

    const { id, estate_title, description, price, Status, Area, location, facilities, image_url } = restaurant;

    return (
        <div data-aos="fade-up"
            data-aos-duration="1000">
            <div className="card card-compact bg-base-100 shadow-xl hover:border border-green-500">
                <figure><img className="h-[200px] w-full rounded-2xl p-3" src={image_url} alt="books" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title font-bold">{estate_title}</h2>
                    <p><span className="font-bold">Description: </span>{description}</p>
                    <div className="flex gap-3">
                        <p><span className="font-bold">Price: </span>{price}</p>
                        <p><span className="font-bold">States: </span>{Status}</p>
                    </div>
                    <div className="flex gap-3">
                        <p><span className="font-bold">Area: </span>{Area}</p>
                        <p><span className="font-bold">Location: </span>{location}</p>
                    </div>

                    <div className="flex gap-3">
                        <p className="text-green-700 bg-green-50 font-semibold p-1 rounded-xl">{facilities[0]}</p>
                        <p className="text-green-700 bg-green-50 font-semibold  p-1 rounded-xl">{facilities[1]}</p>
                        <p className="text-green-700 bg-green-50 font-semibold  p-1 rounded-xl">{facilities[2]}</p>
                    </div>
                    <Link to={`/restaurant/${id}`}><button className="btn bg-green-600 w-full text-white">View Restaurant Details</button></Link>
                </div>
            </div>
        </div>

    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.object
}

export default Restaurant;