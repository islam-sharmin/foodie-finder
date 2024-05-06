import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-8">
            <footer className="footer p-10 bg-green-50 text-base-content">
                <nav className="space-y-2">
                    <h6 className="text-2xl text-green-700 font-bold">Foodie Finder</h6>
                    <p>Discover your dream home and <br />culinary delights here!</p>
                    <div className="flex gap-5 items-center">
                        <p className="text-2xl"><FaFacebook /></p>
                        <p className="text-2xl"><FaGithub /></p>
                        <p className="text-2xl"><FaTwitter /></p>
                        <p className="text-2xl"><FaLinkedin /></p>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-green-700 font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-green-700 font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="text-green-700 font-bold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input w-1/2 md:w-full join-item" />
                            <button className="btn bg-green-600 text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;