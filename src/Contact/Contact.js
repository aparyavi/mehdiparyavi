import { useEffect } from 'react';
import './Contact.css';

function Contact() {
    useEffect(() => {
        document.title = "Contact Mehdi - Mehdi Paryavi's Data Center Blog";
    }, []);
    return (
        <div className="contact_top_div">
            <h1>Contact Mehdi</h1>

            <center>
                <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
                <form className="contact_form"
                    action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                    <input type="hidden" name="oid" value="00D5f000005uJCU" />
                    <input type="hidden" name="retURL" value={"https://www.mehdiparyavi.com/"} />

                    <div>
                        <p>Your First Name (required)</p>
                        <input maxLength="80" name="first_name" size="20" type="text" required="required" />
                    </div>

                    <div>
                        <p>Your Last Name (required)</p>
                        <input maxLength="80" name="last_name" size="20" type="text" required="required" />
                    </div>

                    <div>
                        <p>Your Email (required)</p>
                        <input maxLength="80" name="email" size="20" type="text" required="required" />
                    </div>

                    <div>
                        <p>Your Phone Number</p>
                        <input maxLength="40" name="phone" size="20" type="text" />
                    </div>

                    <div>
                        <p>Your Message</p>
                        <textarea name="00N5f00000QaHJBEA3" rows="1" type="text" wrap="soft"
                            maxLength="200"></textarea>
                    </div>

                    <div>
                        <label htmlFor="lead_source" hidden>Lead Source</label><select hidden id="lead_source" name="lead_source">
                            <option value={"Mehdi Paryavi Contact Page"} selected>Page</option>
                        </select>
                    </div>

                    <div className='contact_form_submit_div'>
                        <input id='contact_form_submit' type="submit" name="submit" value="Submit" />
                    </div>
                </form>
            </center>
        </div >
    );
}

export default Contact;
