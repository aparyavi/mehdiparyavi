import './App.css';
import Navbar from './Navbar/Navbar.js'
import RightSide from './RightSide/RightSide';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HomePage2 from './Home Page 2/Home';
import BlogTemp from './Blogs/BlogTemp';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzeArgShfnzBo9SU6HM2g9CU-VsHZ7WKk",
  authDomain: "mehdiparyavi-94d1c.firebaseapp.com",
  projectId: "mehdiparyavi-94d1c",
  storageBucket: "mehdiparyavi-94d1c.appspot.com",
  messagingSenderId: "1026089402864",
  appId: "1:1026089402864:web:063edec77b606ecca65d35",
  measurementId: "G-LL4QBDB1KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <div>
      <div className="App">
        <div className='Body'>
          <div className='Body_Content'>
            <Router>
              <Navbar />
              <div className='Body_Pages_div'>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/page/2' element={<HomePage2 />} />
                  <Route path='/about-mehdi' element={<About />} />
                  <Route path='/contact-me' element={<Contact />} />

                  <Route path='/willpower-bridge-hope-victory' element={<BlogTemp
                    title={'Willpower: the bridge between Hope and Victory'}
                    category='UNCATEGORIZED' date={'SEPTEMBER 7, 2021'} img={'241206781_1684270128436890_3367835002738623839_n.jpg'}
                    title2={'Willpower: the bridge between Hope and Victory'} blog_num={1} />} />

                  <Route path='/covid-19-stress-testing-applications-global-data-centers' element={<BlogTemp
                    title={'COVID-19 is stress-testing applications and global data centers'}
                    category='DATACENTER' date={'MARCH 23, 2020'} img={'/covid-datacenter.jpg'}
                    title2={'COVID-19 is stress-testing applications and global data centers'} blog_num={2} />} />

                  <Route path='/too-big-to-fail' element={<BlogTemp
                    title={'Too Big to Fail?'}
                    category='DATACENTER' date={'JUNE 27, 2017'} img={'/elephant-cover.jpg'}
                    title2={'Amazon, Microsoft, Google Clouds – Good or Bad?'} blog_num={3} />} />

                  <Route path='/the-infinity-paradigm' element={<BlogTemp
                    title={'The Infinity Paradigm®'}
                    category='DATACENTER' date={'APRIL 25, 2017'} img={'/infinity-mian-pic-new.jpg'}
                    title2={'The Standards Framework for Information Technology, Data Centers, Cloud, Big Data, IoT, Facilities, and Infrastructure'} blog_num={4} />} />

                  <Route path='/top-5-data-center-tips-for-2017' element={<BlogTemp
                    title={'Top 5 Data Center Tips for 2017'}
                    category='DATACENTER' date={'DECEMBER 9, 2016'} img={'/mehdiparyavi-2017-blog-new-new.jpg'}
                    title2={'Data Center Industry Roadmap 2017-2020'} blog_num={5} />} />

                  <Route path='/data-center-compromises' element={<BlogTemp
                    title={'Data Center Compromises'}
                    category='DATACENTER' date={'SEPTEMBER 8, 2016'} img={'/DC_Comprimises.jpg'}
                    title2={'A Symphony of equilibriums…'} blog_num={6} />} />

                  <Route path='/data-center-standards' element={<BlogTemp
                    title={'Data Center Standards'}
                    category='DATACENTER' date={'AUGUST 1, 2016'} img={'/data-center-standard.png'}
                    title2={'Common language. Common norm. Common understanding.'} blog_num={7} />} />

                  <Route path='/supply-and-demand-the-bitter-irony-of-our-time' element={<BlogTemp
                    title={'Supply and Demand – The Bitter Irony of Our Time'}
                    category='DATACENTER' date={'MAY 9, 2016'} img={'/15961562_l-copy.jpg'}
                    title2={'Common language. Common norm. Common understanding.'} blog_num={8} />} />

                  <Route path='/1-should-we-confine-data-within-borders' element={<BlogTemp
                    title={'Should We Confine Data Within Borders?'}
                    category='DATACENTER' date={'FEBRUARY 18, 2016'} img={'/confine-data-within-borders2.jpg'}
                    blog_num={9} />} />

                  <Route path='/the-global-transformation' element={<BlogTemp
                    title={'The Global Transformation'}
                    category='DATACENTER' date={'JANUARY 8, 2016'} img={'/global-transformation1.jpg'}
                    title2={'Root-cause: Information Technology via Data Centers'} blog_num={10} />} />

                  <Route path='/data-centers-fail-much' element={<BlogTemp
                    title={'Why Do Data Centers Fail So Much?'}
                    category='DATACENTER' date={'OCTOBER 28, 2015'} img={'/blog51.jpg'}
                    title2={'The fundamental root-cause of data center failure'} blog_num={11} />} />

                  <Route path='/end-power-cooling-cabling-centers-beginning-data-centers' element={<BlogTemp
                    title={'The End of Power, Cooling and Cabling Centers; Beginning of “Data” Centers'}
                    category='DATACENTER' date={'SEPTEMBER 21, 2015'} img={'/The-Future2.png'}
                    title2={'The application ecosystem'} blog_num={12} />} />

                  <Route path='/key-advice-commercial-data-centers' element={<BlogTemp
                    title={'Key Advice to Commercial Data Centers'}
                    category='DATACENTER' date={'SEPTEMBER 1, 2015'} img={'/Key-Graphics-Recovered.jpg'}
                    blog_num={13} />} />

                  <Route path='/identity-crises-within-data-center-industry' element={<BlogTemp
                    title={'Identity Crisis Within the Data Center Industry'}
                    category='DATACENTER' date={'AUGUST 19, 2015'} img={'/Identity.jpg'}
                    blog_num={14} />} />

                  <Route path='/data-center-blog' element={<BlogTemp
                    title={'Data Center Blog'}
                    category='DATACENTER' date={'AUGUST 5, 2015'} img={'/road.jpg'}
                    blog_num={15} />} />
                </Routes>
              </div>
            </Router>
          </div>
        </div>

        <div className='Right_Side'>
          <RightSide />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
