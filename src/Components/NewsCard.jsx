
import { BsBookmark } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        tags,
        others,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="card flex bg-base-100 shadow-xl rounded-[5px]">
            <div className="flex items-center bg-base-200 p-5 justify-between gap-2 rounded-t-[5px]">
                <div className="flex items-center gap-2">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                        <span className="font-semibold">{author.name}</span>
                        <span className="text-gray-500">{formattedDate}</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <BsBookmark className="text-accent text-xl" />
                    <CiShare2 className="text-accent text-2xl" />
                </div>
            </div>
            <div className=" p-5 space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-lg font-bold">{title}</h2>
                    {others.is_trending && (
                        <span className="badge badge-warning">{rating.badge}</span>
                    )}
                </div>
                <figure className="mt-5 mb-8">
                    <img
                        src={image_url}
                        alt={title}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </figure>
                <div className="text-gray-600 ">
                    {details.length > 200 ? (
                        <>
                            {details.slice(0, 200)}...
                            <span className="text-secondary font-semibold cursor-pointer hover:underline ">
                                Read More
                            </span>
                        </>
                    ) : (
                        details
                    )}
                </div>
                <div className="flex items-center justify-between gap-4 text-sm text-gray-600 my-5 border-y-2 border-base-200 py-4">
                    <div className="flex items-center justify-center gap-1">
                        <Rating
                            emptySymbol={<IoIosStarOutline className="text-yellow-400 text-2xl" />}
                            fullSymbol={<IoMdStar className="text-yellow-400 text-2xl" />}
                            readonly={true}
                            initialRating={rating.number}
                        />
                        {/* <FaStar className="text-yellow-400" /> */}
                        <span>{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="badge badge-outline badge-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
