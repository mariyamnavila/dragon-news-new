
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NewsDetailsCard = ({ news }) => {

    return (
        <div className='space-y-5 border border-base-300 rounded-2xl p-7'>
            <img className='w-full h-[410px] object-cover rounded-xl' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold text-primary'>{news.title}</h2>
            <p className='text-accent'>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>
                <BiArrowBack className='text-2xl'/> All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;