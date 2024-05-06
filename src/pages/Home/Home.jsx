import { useLoaderData } from "react-router-dom";
import Banner from "../../shared/Banner/Banner";
import Restaurant from "../../shared/Restaurant/Restaurant";
import PeopleSaying from "../../shared/PeopleSaying/PeopleSaying";
import Pricing from "../../shared/Pricing/Pricing";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const restaurants = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Foodie Finder | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mb-12">
            <div className="py-4 rounded-lg mt-12 mb-8 ">
                <h2 className="text-3xl font-bold text-center mb-6">Restaurants</h2>
                <p className="text-center">Discover our breathtaking views, enhancing every dining experience with picturesque landscapes and cityscapes.</p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {
                    restaurants.map(restaurant=> <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>)
                }
            </div> 
            </div>
            <Pricing></Pricing>
            <PeopleSaying></PeopleSaying>
        </div>
    );
};

export default Home;