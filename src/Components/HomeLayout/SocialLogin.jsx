import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-xl">Login with</h2>
            <div className="*:w-full space-y-3">
                <button className="btn btn-outline btn-secondary"><FcGoogle className="text-[24px]"/> Login with Google</button>
                <button className="btn btn-outline btn-primary"><FaGithub className="text-[24px]"/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;