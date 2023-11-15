import { useEffect } from 'react';
import './About.css';

function About() {
    useEffect(() => {
        document.title = "About Mehdi - Mehdi Paryavi's Data Center Blog";
        document.description = "Mehdi is Chairman of International Data Center Authority (IDCA). He provides guidance to the IDCA affairs and data center industry via his active presence, in-depth knowledge, diverse expertise and see-through vision. Mehdi’s thoughts are always highly educational and boldly progressive. When he speaks, he delivers exceptionally unique set of eye-opening speeches and lectures that are …";
    }, []);
    return (
        <div className="about_top_div">
            <h1>About Mehdi</h1>
            <img src='/DSC_0505-300x199.jpg' />
            <p>{'Mehdi is Chairman of International Data Center Authority (IDCA). He provides guidance to the IDCA affairs and data center industry via his active presence, in-depth knowledge, diverse expertise and see-through vision. Mehdi’s thoughts are always highly educational and boldly progressive. When he speaks, he delivers exceptionally unique set of eye-opening speeches and lectures that are always life changing. He lectures globally and represents IDCA in summits, seminars, symposium and webinars. Meeting with governmental delegations, including Presidents, Prime Ministers, and Ministers with regards to digital economies, digital infrastructure, digital road-maps, data center and cloud strategies, national standardization and education programs on information technology, as well as discussions with C-Levels across the corporate arena are integral portions of Mehdi’s active role at IDCA. He oversees the developments of the IDCA boards and committees. He provides insight and supervision to the development of the data center standards and utilizes his knowhow, expertise and forward-looking strategies to empower and enable the development of the Application Ecosystem® industry, which is inclusive of information technology, data center, cloud, IoT, AI, etc.'}</p>
            <center>
                <iframe
                    width="70%"
                    height="300"
                    src={`https://www.youtube.com/embed/RReNIr7Pm94`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Chairman Mehdi Paryavi"
                />
            </center>

            <p>{'Mehdi is first individual to realize the urge, pioneer the concept and advocate for “application-centric” infrastructures. He actively promotes “data” center specialization across industry verticals suited to the application needs. He is a futurist living in the present, a thought leader in true Cloud “not just Virtualized, but Realized” (as he puts it), expert strategist and transitionist between the logical abstraction layers of cloud to its physical merits and possibilities. His in-depth understanding of the “data center” and its inherited comprehensive unity of IT and Facility merged with his sensible and realistic approach towards energy efficiency and environmentally conscious designs and implementations sheds light into the clouded ambiguities of “Big Data”, “IoT”, and “Cloud” which caters harmony to the world at large.'}</p>
            <p>{'Mehdi is passionate in building better lives for the citizens of the world. He insists on the promising merits of building the right foundations for robust and sustainable digital economies around the globe. Mehdi has carried out missions and traveled worldwide to carry the message of global harmony, peace, dialog, liberty and prosperity through the means of fundamental digital transformation of nations and their emergence to the new global stage.'}</p>
            <p>{'He has led the campaign to bring knowledge, standardization, compliance, best practices, and technological developments as well as effective expertise to the data center industry, both nationally and internationally specially for mission-critical environments effectively for national security projects, securities and exchange projects, aviation and transport, military and defense, oil and gas, telecommunication, healthcare, etc. Mehdi is known for his immense experience, thought leadership, visionary strategies, comprehensive expertise, effective methods and systematic, yet fluid approach. Mehdi has been personally responsible for the training, education, certification and career development of thousands of data center professionals worldwide.'}</p>
            <p>{'Aside from his speeches in conferences, symposiums, lectures, sessions with top officials and discussions at expert assemblies, his advice and strategies are typically used as benchmarks at many government and private institutions. Thus, organizations typically seek his recommendations for best practices and approach towards their short-term and long-term planning of data center and data management.'}</p>
        </div>
    );
}

export default About;
