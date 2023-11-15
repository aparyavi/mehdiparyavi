import { useEffect } from 'react';
import './BlogTemp.css'
import { PiBookmarkLight } from 'react-icons/pi'
import BlogText from './BlogText';

function BlogTemp({ category, title, date, img, title2, blog_num }) {
    useEffect(() => {
        document.title = title + " - Mehdi Paryavi's Data Center Blog";
        document.description = title2;
    }, []);

    return (
        <div className='blog_temp_top_all_div'>
            <div className='home_indiv_blog_top_div'>
                <p className='home_indiv_blog_category'>{category}</p>
                <h2>{title}</h2>
                <div className='home_indiv_blog_date_name'>
                    <PiBookmarkLight size={19} />
                    <p>{date} / BY <span>MEHDI PARYAVI</span></p>
                </div>
                <img src={img} width={'100%'} />
                <div className='home_indiv_blog_details'>
                    <h3>{title2}</h3>
                </div>

                <BlogText blog_num={blog_num} />
            </div>
        </div >
    );
}

export default BlogTemp;
