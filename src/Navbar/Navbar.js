import { useEffect } from 'react';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'

function Navbar() {

    useEffect(() => {
        if (window.location.pathname === '/about-mehdi') {
            document.getElementById('navbar_about').style.color = '#505050'
            document.getElementById('navbar_about').style.fontWeight = '350'
            document.getElementById('navbar_about_small').style.color = '#e0e0e0'
        } else if (window.location.pathname === '/contact-me') {
            document.getElementById('navbar_contact').style.color = '#505050'
            document.getElementById('navbar_contact').style.fontWeight = '350'
            document.getElementById('navbar_contact_small').style.color = '#e0e0e0'
        } else {
            document.getElementById('navbar_home').style.color = '#505050'
            document.getElementById('navbar_home').style.fontWeight = '350'
            document.getElementById('navbar_home_small').style.color = '#e0e0e0'
        }
    }, [])

    function menuClick() {
        document.getElementById('navbar_small_menu').style.display = 'none'
        document.getElementById('navbar_small_cancel').style.display = 'inherit'
        document.getElementById('navbar_small_page_list').style.display = 'inherit'
    }
    function cancelClick() {
        document.getElementById('navbar_small_cancel').style.display = 'none'
        document.getElementById('navbar_small_menu').style.display = 'inherit'
        document.getElementById('navbar_small_page_list').style.display = 'none'
    }

    return (
        <div>
            <center className='navbar_center'>
                <a href='/'>
                    <p id='navbar_home'>HOME</p>
                </a>
                <a href='/about-mehdi'>
                    <p id='navbar_about'>ABOUT MEHDI</p>
                </a>
                <a href='/contact-me'>
                    <p id='navbar_contact'>CONTACT MEHDI</p>
                </a>
                <a href='https://idc-a.org/' target={'_blank'} rel="noreferrer">
                    <p>IDCA</p>
                </a>
                <a href='https://www.techxact.com/' target={'_blank'} rel="noreferrer">
                    <p>TECHXACT</p>
                </a>
            </center>

            <div className='navbar_small_top_div'>
                <div className='navbar_small_top_header_div'>
                    <a href='/'>
                        <img src='/MehdiParyavi_Blog_Logo.png' className='navbar_small_img' />
                    </a>
                    <div id='navbar_small_menu' onClick={() => menuClick()}>
                        <FiMenu color='white' size={22} />
                    </div>
                    <div id='navbar_small_cancel' onClick={() => cancelClick()}>
                        <RxCross1 color='white' size={18} />
                    </div>
                </div>

                <div id='navbar_small_page_list'>
                    <div className='navbar_small_divider'></div>

                    <div className='navbar_small_page_list_inner_fixed_div'>
                        <div className='navbar_small_page_list_inner_div'>
                            <div className='navbar_small_page_list_inner_quote'>
                                <p className='right_side_header_text'>Blunt Doses of</p>
                                <p className='right_side_header_text'>Data Center Knowledge</p>
                            </div>

                            <div className='navbar_small_page_list_inner_links_div'>
                                <a href='/'>
                                    <p id='navbar_home_small'>HOME</p>
                                </a>
                            </div>
                            <div className='navbar_small_page_list_inner_links_div'>
                                <a href='/about-mehdi'>
                                    <p id='navbar_about_small'>ABOUT MEHDI</p>
                                </a>
                            </div>
                            <div className='navbar_small_page_list_inner_links_div'>
                                <a href='/contact-me'>
                                    <p id='navbar_contact_small'>CONTACT MEHDI</p>
                                </a>
                            </div>
                            <div className='navbar_small_page_list_inner_links_div'>
                                <a href='https://idc-a.org/' target={'_blank'} rel="noreferrer">
                                    <p>IDCA</p>
                                </a>
                            </div>
                            <div className='navbar_small_page_list_inner_links_div' id='navbar_small_page_list_inner_techxact'>
                                <a href='https://www.techxact.com/' target={'_blank'} rel="noreferrer">
                                    <p>TECHXACT</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
