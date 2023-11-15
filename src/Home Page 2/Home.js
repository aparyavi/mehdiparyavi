import { useEffect } from 'react';
import { PiBookmarkLight } from 'react-icons/pi'
import { BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

function HomePage2() {
    useEffect(() => {
        document.title = "Mehdi Paryavi's Data Center Blog";
        document.description = "Official Blog of President to TechXact Group and Chairman of IDCA, addressing data center industry's most noble questions and remedies";
    }, []);

    function indivBlog(category, title, date, img, text, url, title2) {
        return (
            <div className='home_indiv_blog_top_div'>
                <p className='home_indiv_blog_category'>{category}</p>
                <h2>{title}</h2>
                <div className='home_indiv_blog_date_name'>
                    <PiBookmarkLight size={19} />
                    <p>{date} / BY <span>MEHDI PARYAVI</span></p>
                </div>
                <img src={img} width={'100%'} />
                <div className='home_indiv_blog_all_detail_top_div'>
                    <div className='home_indiv_blog_details'>
                        <h3>{title2}</h3>
                        <p>{text}</p>
                        <div className='home_indiv_blog_link'>
                            <a href={url}>
                                <p>Read the rest</p>
                            </a>
                        </div>
                    </div>

                    <div className='home_indiv_blog_detail_contin_divide'></div>

                    <div>
                        <div className='home_indiv_blog_social_div'>
                            <a href='https://www.instagram.com/mehdiparyavi/' className='home_indiv_blog_social_a' target={'_blank'} rel="noreferrer">
                                <center>
                                    <BiLogoInstagram color='#dedddd' size={25} />
                                </center>
                            </a>
                            <a href='https://www.linkedin.com/in/mehdi-paryavi-2babb620/' className='home_indiv_blog_social_a' target={'_blank'} rel="noreferrer">
                                <center>
                                    <BiLogoLinkedin color='#dedddd' size={25} />
                                </center>
                            </a>
                        </div>

                        <div className='home_indiv_blog_contin_reading_div'>
                            <a href={url}>
                                <p>CONTINUE READING</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {indivBlog('DATACENTER', 'Why Do Data Centers Fail So Much?', 'OCTOBER 28, 2015', '/blog51.jpg',
                'We have seen so many papers and opinions on this very question and redundant topic: “top 10 reasons why your data center goes down”, “top 5 things you should do to prevent downtime”, “top root-causes of data center outage”. It has become more of an entertainment and game of numbers to see who …',
                '/data-centers-fail-much', 'The fundamental root-cause of data center failure')}

            < div className='home_blog_divider' ></div>

            {
                indivBlog('DATACENTER', 'The End of Power, Cooling and Cabling Centers; Beginning of “Data” Centers', 'SEPTEMBER 21, 2015', '/The-Future2.png',
                    'The data center world has heard and wasted enough resources over the wrong emphasis placed on the facility aspects of the data center, while not witnessed merely enough attention on the data center’s merit, purpose and true output. So often, we are overwhelmed by the extensive focus on “power” (UPS, ATS, Generators, Busbars, etc.), or “cooling” (free-cooling, …',
                    '/end-power-cooling-cabling-centers-beginning-data-centers', 'The application ecosystem')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Key Advice to Commercial Data Centers', 'SEPTEMBER 1, 2015', '/Key-Graphics-Recovered.jpg',
                    'How can commercial data centers effectively address the needs of today’s hosting markets and be ready for a future that is just around the corner? Here is some key advice for those who would like to serve the realities of today and the requirements of tomorrow:…',
                    '/key-advice-commercial-data-centers')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Identity Crisis Within the Data Center Industry', 'AUGUST 19, 2015', '/Identity.jpg',
                    'In most economic reports, political agendas, even credit application forms, “data center” is not mentioned as an economy sector, community driver, or a recognized industry. Often data center is classified under Information Technology, Telecommunication, Facilities, Security, Real Estate and/or any other generic category that, by the common opinion, comes close. In reality, these alterations are misleading and inappropriate. Question is, …',
                    '/identity-crises-within-data-center-industry')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Data Center Blog', 'AUGUST 5, 2015', '/road.jpg',
                    'Often I am asked to start a data center blog and provide the data center community my points of view to the whole data center ordeal. Obviously data center is a focal expertise of mine. But life is not all about one’s field of work. Our educational system, political arena, economic challenges, diverse cultures and norms within and around us, …',
                    '/data-center-blog')
            }

            <div className='home_blog_divider' style={{ marginBottom: '0px' }}></div>

            <div className='home_blog_page_bottom'>
                <a href='/'>
                    <p className='home_blog_page_bottom_2'>1</p>
                </a>
                <div></div>
                <p className='home_blog_page_bottom_1'>2</p>
            </div>

            <div className='home_blog_divider' style={{ marginTop: '0px' }}></div>
        </div >
    );
}

export default HomePage2;
