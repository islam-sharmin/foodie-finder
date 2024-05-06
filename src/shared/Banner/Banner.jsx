import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import restaurant1 from '../../assets/1.jpg';
import restaurant2 from '../../assets/2.jpg';
import restaurant3 from '../../assets/3.jpg';
import restaurant4 from '../../assets/4.jpg';
import restaurant5 from '../../assets/5.jpg';
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='rounded-lg z-10'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 2000 }}
            >
                <SwiperSlide>
                    <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant1})` }}>
                        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                            <h1 className="text-white text-3xl font-bold mb-4">Welcome to Foodie Finder</h1>
                            <p className="text-white text-lg">Discover ideal properties for your restaurant venture. Explore diverse listings tailored to culinary ambitions.</p>
                            <Link to='/register' className="btn btn-ghost mt-4 border-green-700 text-white font-bold">For join with us. Please <span className="underline">Register</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant2})` }}>
                        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                            <h1 className="text-white text-3xl font-bold mb-4">Welcome to Foodie Finder</h1>
                            <p className="text-white text-lg">Discover ideal properties for your restaurant venture. Explore diverse listings tailored to culinary ambitions.</p>
                            <Link to='/register' className="btn btn-ghost mt-4 border-green-700 text-white font-bold">For join with us. Please <span className="underline">Register</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant3})` }}>
                        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                            <h1 className="text-white text-3xl font-bold mb-4">Welcome to Foodie Finder</h1>
                            <p className="text-white text-lg">Discover ideal properties for your restaurant venture. Explore diverse listings tailored to culinary ambitions.</p>
                            <Link to='/register' className="btn btn-ghost mt-4 border-green-700 text-white font-bold">For join with us. Please <span className="underline">Register</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant4})` }}>
                        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                            <h1 className="text-white text-3xl font-bold mb-4">Welcome to Foodie Finder</h1>
                            <p className="text-white text-lg">Discover ideal properties for your restaurant venture. Explore diverse listings tailored to culinary ambitions.</p>
                            <Link to='/register' className="btn btn-ghost mt-4 border-green-700 text-white font-bold">For join with us. Please <span className="underline">Register</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant5})` }}>
                        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                            <h1 className="text-white text-3xl font-bold mb-4">Welcome to Foodie Finder</h1>
                            <p className="text-white text-lg">Discover ideal properties for your restaurant venture. Explore diverse listings tailored to culinary ambitions.</p>
                            <Link to='/register' className="btn btn-ghost mt-4 border-green-700 text-white font-bold">For join with us. Please <span className="underline">Register</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Banner;