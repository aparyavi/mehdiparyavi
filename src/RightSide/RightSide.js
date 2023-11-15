import './RightSide.css';
import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'

function RightSide() {
    return (
        <div className="right_side_top_div">
            <div className='right_side_inner_top_half_div'>
                <div className='right_side_inner_top_div'>
                    <img src='/MehdiParyavi_Blog_Logo.png' className='right_side_name_img' />

                    <p className='right_side_header_text'>Blunt Doses of</p>
                    <p className='right_side_header_text'>Data Center Knowledge</p>
                </div>

                <div className='right_side_divide'></div>
            </div>

            <div className='right_side_inner_bottom_half_div'>
                <div className='right_side_inner_top_div'>
                    <div>
                        <p className='right_side_welcome'>WELCOME{'!'}</p>
                        <iframe
                            width="100%"
                            height="170"
                            src={`https://www.youtube.com/embed/RReNIr7Pm94`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Chairman Mehdi Paryavi"
                        />

                        <p className='right_side_decription_text'>
                            Often I am asked to provide the data center community my points of view to the whole data center ordeal. Obviously data center is a focal expertise of mine. But life is not all about one’s field of work. Our educational system, political arena, economic challenges, diverse cultures and norms within and around us, depict the very atmosphere we live in. So there is a lot to be said about the above and more. But let’s start with data centers and see where it takes us…
                        </p>

                        <img src='/sig.png' className='right_side_name_img' />

                        <div className='right_side_divide'></div>
                    </div>

                    <div>
                        <p className='right_side_tags'>Tags</p>
                        <div className='right_side_tags_div'>
                            <p>application-centric data center</p>
                            <p>Application Ecosystem</p>
                            <p>cabling</p>
                            <p>Commercial Data Center</p>
                            <p>cooling</p>
                            <p>Data Center Advice</p>
                            <p>data center availability</p>
                            <p>data center best practice</p>
                            <p>Data Center Blog</p>
                            <p>Data Center Business</p>
                            <p>data center community</p>
                            <p>data center culture</p>
                            <p>data center definition</p>
                            <p>Data Center Education</p>
                            <p>data center focus</p>
                            <p>data center framework</p>
                            <p>Data Center Impact</p>
                            <p>Data Center Industry</p>
                            <p>Data Center Info</p>
                            <p>Data Center Knowledge</p>
                            <p>Data Center Management</p>
                            <p>data center manager</p>
                            <p>Data Center Market</p>
                            <p>data center meaning</p>
                            <p>data center node</p>
                            <p>data center people</p>
                            <p>data center professionals</p>
                            <p>data center purpose</p>
                            <p>data center relevance</p>
                            <p>data center standard</p>
                            <p>Data center standards</p>
                            <p>Data Center Tips</p>
                            <p>Data Center Updates</p>
                            <p>DCCM</p>
                            <p>DCNM</p>
                            <p>demand</p>
                            <p>economic development</p>
                            <p>Global Transformation</p>
                            <p>IDCA</p>
                            <p>Identity crisis</p>
                            <p>Information Technology</p>
                            <p>power</p>
                            <p>social development</p>
                            <p>Supply and Demand</p>
                            <p>what data center standards</p>
                        </div>

                        <div className='right_side_divide'></div>

                        <p className='right_side_tags'>Follow Mehdi Paryavi</p>
                        <div className='right_side_social_media_top_div'>
                            <a href='https://www.instagram.com/mehdiparyavi/' className='right_side_social_media_a' target={'_blank'} rel="noreferrer">
                                <center>
                                    <AiFillInstagram color='#8d8d8d' size={40} />
                                    <p>Instagram</p>
                                </center>
                            </a>
                            <a href='https://www.linkedin.com/in/mehdi-paryavi-2babb620/' className='right_side_social_media_a right_side_social_media_linkedin' target={'_blank'} rel="noreferrer">
                                <center>
                                    <ImLinkedin color='#8d8d8d' size={30} />
                                    <p>LinkedIn</p>
                                </center>
                            </a>
                        </div>

                        <div className='right_side_divide'></div>

                        <div>
                            <p className='right_side_quotes'>
                                ... "Values of the past are the poetry of our time" ... - M.P.
                            </p>

                            <p className='right_side_quotes'>
                                ... "To be or not to be, is not the question. The question is how to be." ... - M.P.
                            </p>

                            <p className='right_side_quotes'>
                                ... "Our past is affected as much as our future with the implications of our present." ... - M.P.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSide;
