import contactUs from "../../assets/contact-us.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
            <Helmet>
            <title>Foodie Finder | Contact Us</title>
            </Helmet>
            <div className='flex-1'>
                <div className="flex justify-center">
                <img className="w-1/2" src={contactUs} alt="" />
                </div>
            <form className="card-body">
                            <div className="form-control">
                            <input type="text" placeholder="Your name" className="input input-bordered input-success w-full" />
                            </div>
                            <div className="form-control">
                            <input type="email" placeholder="Your email" className="input input-bordered input-success w-full" />
                            </div>
                            <div className="form-control">
                            <textarea className="textarea textarea-success" placeholder="Write your text here..."></textarea>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-green-500 text-white">Send</button>
                            </div>
                        </form>
            </div>
            <div className='h-[450px] w-full md:w-1/2 p-5'>
                <MapContainer center={[23.8041, 90.4152]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.8041, 90.4152]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default ContactUs;
