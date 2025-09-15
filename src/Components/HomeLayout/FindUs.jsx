import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-xl">Find Us On</h2>
            <div className="join w-full join-vertical *:bg-base-100">
                <button className="btn join-item justify-start "><FaFacebookF />Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;