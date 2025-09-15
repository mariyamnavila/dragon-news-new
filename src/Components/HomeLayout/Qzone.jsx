import swimming from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import play from '../../assets/playground.png';
 
const Qzone = () => {
    return (
        <div className="bg-base-200 p-3">
            <h2 className="font-bold mb-3 text-xl">Q-zone</h2>
            <div className="space-y-5">
            <img src={swimming} alt="" />
            <img src={classImage} alt="" />
            <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;