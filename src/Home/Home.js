import { useEffect } from 'react';
import './Home.css';
import { PiBookmarkLight } from 'react-icons/pi'
import { BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

function Home() {
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
            {indivBlog('UNCATEGORIZED', 'Willpower: the bridge between Hope and Victory', 'SEPTEMBER 7, 2021', '/241206781_1684270128436890_3367835002738623839_n.jpg',
                'Exactly how much hope, energy, and willpower is there within each human life? At a time where thousands of our fellow humans are dying due to a magnitude of reasons— excuses, really, for incapable governments and inept leadership across the globe; the life stories of people like Abbas Karimi can deter our negative …',
                '/willpower-bridge-hope-victory', 'Willpower: the bridge between Hope and Victory')}

            < div className='home_blog_divider' ></div>

            {
                indivBlog('DATACENTER', 'COVID-19 is stress-testing applications and global data centers', 'MARCH 23, 2020', '/covid-datacenter.jpg',
                    'It has been a long time I haven’t had the chance to write a blog, now writing this in a time that the global pandemic, COVID-19, is testing humanity’s patience, as well as our applications and data center capabilities globally and …',
                    '/covid-19-stress-testing-applications-global-data-centers', 'COVID-19 is stress-testing applications and global data centers')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Too Big to Fail?', 'JUNE 27, 2017', '/elephant-cover.jpg',
                    'The publication of this blog coincides with the Independence Day. Though this junction was not intended with strong emphasis, nevertheless the following should provide an aspirational insight for us to always maintain a certain level of independence on the global stage for both our businesses and our government…',
                    '/too-big-to-fail', 'Amazon, Microsoft, Google Clouds – Good or Bad?')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'The Infinity Paradigm®', 'APRIL 25, 2017', '/infinity-mian-pic-new.jpg',
                    'Business owners and Technology stakeholders have never had a systematic and dynamic mechanism that provided a holistic end-result driven evaluation of the effectiveness of the vast and disparate array of information, applications, resources, technologies, processes, personnel, infrastructure, documentation, standards and governance that together, despite their …',
                    '/the-infinity-paradigm', 'The Standards Framework for Information Technology, Data Centers, Cloud, Big Data, IoT, Facilities, and Infrastructure')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Top 5 Data Center Tips for 2017', 'DECEMBER 9, 2016', '/mehdiparyavi-2017-blog-new-new.jpg',
                    'Data center design, build, operation and ownership are entering a new era. It will not be long before those operators who failed to adapt, will perish by the virtue of their own making. Whether there will be more or less data centers, greater or fewer outsourcing, expansion of public or private clouds, larger or smaller …',
                    '/top-5-data-center-tips-for-2017', 'Data Center Industry Roadmap 2017-2020')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Data Center Compromises', 'SEPTEMBER 8, 2016', '/DC_Comprimises.jpg',
                    'Life is impossible without compromises. Data centers, like any other walk of life, are resolutions of a chain of compromises. Usually people believe that the main compromise in data centers is between cost and availability. It’s not that simple, unfortunately. To compromise, organizations typically undermine important measures in order to render maximized outputs for a given …',
                    '/data-center-compromises', 'A Symphony of equilibriums…')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Data Center Standards', 'AUGUST 1, 2016', '/data-center-standard.png',
                    'Data centers are being built at a rapid pace beyond our comprehension. They are also transforming at a staggering speed. Sometimes having rules, guidelines and methodologies that are measurable and applicable are liberating. They are liberating in the sense that they provide a clear-cut approach and the necessary …',
                    '/data-center-standards', 'Common language. Common norm. Common understanding.')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Supply and Demand – The Bitter Irony of Our Time', 'MAY 9, 2016', '/15961562_l-copy.jpg',
                    'The very pillar of capitalism is the open market system whereby supply is driven by demand – Econ101. This is when a group of so-called “elite” don’t sit and engineer what needs to be supplied to their liking. It is when the economic driver is the pull of demand, not the push of supply. But, what happens when demand is …',
                    '/supply-and-demand-the-bitter-irony-of-our-time')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'Should We Confine Data Within Borders?', 'FEBRUARY 18, 2016', '/confine-data-within-borders2.jpg',
                    'When liberal economy and trade meant traveling between borders, creating the Russia’s Iron Curtain or Germany’s Berlin Wall seemed like a political remedy to safeguard certain sociopolitical hemispheres. But those latter policies and the erection of those barriers were proven disastrous to their citizens and the world around them.',
                    '/1-should-we-confine-data-within-borders')
            }

            <div className='home_blog_divider'></div>

            {
                indivBlog('DATACENTER', 'The Global Transformation', 'JANUARY 8, 2016', '/global-transformation1.jpg',
                    'The world as we know it is transforming into something of a different nature. A nature that is not natural by the benchmark of our predecessors. This transformation is changing the way we bond, work, interact, and live. If watching too much TV was of a topic of concern a few years ago, now …',
                    '/the-global-transformation', 'Root-cause: Information Technology via Data Centers')
            }

            <div className='home_blog_divider' style={{ marginBottom: '0px' }}></div>

            <div className='home_blog_page_bottom'>
                <p className='home_blog_page_bottom_1'>1</p>
                <div></div>
                <a href='/page/2'>
                    <p className='home_blog_page_bottom_2'>2</p>
                </a>
            </div>

            <div className='home_blog_divider' style={{ marginTop: '0px' }}></div>
        </div >
    );
}

export default Home;
