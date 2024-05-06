import { useLoaderData, useParams } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";


const RestaurantDetails = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const restaurants = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const restaurant = restaurants.find(restaurant => restaurant.id === idInt);

    return (
        <div data-aos="zoom-in-left" data-aos-duration="1000">
            <Helmet>
                <title>Foodie Finder | Restaurant Details</title>
            </Helmet>
            <div className="hero mt-8">
                <div className="hero-content gap-5 flex-col lg:flex-row">
                    <img src={restaurant.image_url} className="rounded-lg shadow-xl bg-base-300 h-[80vh] w-full md:w-1/2" />
                    <div className="space-y-2 py-2">
                        <h1 className="text-2xl font-bold">{restaurant.estate_title}</h1>
                        <p className="text-xl"> <span className="font-bold">Description: </span> {restaurant.description}</p>
                        <hr />
                        <p><span className="font-bold">Segment Name: </span>{restaurant.segment_name}</p>
                        <p><span className="font-bold">Price: </span>{restaurant.price}</p>
                        <p><span className="font-bold">Status: </span>{restaurant.Status}</p>
                        <p><span className="font-bold">Area: </span>{restaurant.Area}</p>
                        <p><span className="font-bold">Location: </span>{restaurant.location}</p>
                        <hr />
                        <ul className="font-bold">Facilities: </ul>
                        <li className="text-green-700 font-semibold p-1 rounded-xl"># {restaurant.facilities[0]}</li>
                        <li className="text-green-700 font-semibold p-1 rounded-xl"># {restaurant.facilities[1]}</li>
                        <li className="text-green-700 font-semibold p-1 rounded-xl"># {restaurant.facilities[2]}</li>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;