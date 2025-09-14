import { fi } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return
        } else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
        } else {
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews)
        }
    }, [data, id])
    return (
        <div>
{categoryNews.length}
        </div>
    );
};

export default CategoryNews;