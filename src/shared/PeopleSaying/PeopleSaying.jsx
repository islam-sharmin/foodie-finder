import user1 from "../../assets/user1.jpg";
import user3 from "../../assets/user3.jpg";
import user2 from "../../assets/user2.jpg";

const PeopleSaying = () => {

    return (
        <div className='my-14'>
            <div className="py-4 rounded-lg mt-12 mb-8 ">
                <h2 className="text-3xl font-bold text-center mb-6">What People Are Saying</h2>
                <p className="text-center">Real stories from satisfied clients highlight our commitment to exceptional service and successful real estate outcomes.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-10" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>I absolutely loved the atmosphere here. The decor is classy yet inviting, perfect for hosting clients. The food was superb, especially the seafood dishes. I highly recommend this restaurant for business lunches and casual dinners alike.</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user1} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Alice Johnson</h2>
                            <p>Real Estate Agent</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>This restaurant exceeded my expectations. The service was impeccable, and the staff were knowledgeable about the menu. The dishes were beautifully presented and bursting with flavor. I will definitely be back and will recommend it to colleagues and friends.</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user3} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">John Smith</h2>
                            <p>Property Developer</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>What a gem! The location is stunning, and the interior design is inspiring. The menu offers a wonderful variety, and everything we tried was delicious. This place is perfect for hosting design meetings or simply enjoying a meal with a view.</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user2} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Sinha Chang</h2>
                            <p>Interior Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSaying;