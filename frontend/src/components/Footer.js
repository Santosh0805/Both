import SocialIcon1 from '../images/social-facebook.svg';
import SocialIcon2 from '../images/social-pinterest.svg';
import SocialIcon3 from '../images/social-instagram.svg';
import SocialIcon4 from '../images/app-icon.png';
import {AiOutlinePlus} from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';


function Footer (){
    return(
        <div>
            <footer>
                <div className="foot-link-1">

                    <div className="footer-link">
                    <div>
                        <p>Customer Service</p>
                        <p>Get Help</p>
                    </div>

                    <div className='fllex'>
                        <div>
                            <p>Find a Warehouse</p>
                            <div><input type="text" placeholder="City, state or zip"/></div>
                        </div>

                        <div>
                            <p>Get Email Offers</p>
                            <div>
                            <input type="text" placeholder="Enter your email"/>
                            <button><p>Go</p></button>
                            </div>
                    
                        </div>

                        <div>
                           <p>Follow Us</p>
                           <div className="social-icons">
                                <div><img src={SocialIcon1} alt=""/></div>
                                <div><img src={SocialIcon2} alt=""/></div>
                                <div><img src={SocialIcon3} alt=""/></div>
                            </div>
                    
                        </div>
                    </div>

                    <div>
                        <p>Get the Costco App</p>
                        <div className="social-icons"><img src={SocialIcon4} alt=""/></div>
                    </div>

                    </div><hr/>

                    <div className="footer-link-2">
                    <div>
                    <h3>About Us</h3>
                    <p>Charitable Contributions</p>
                    <p> Information</p>
                    <p>Sustainability Commitment</p>
                    <p>Investor Relations</p>
                    <p>Jobs</p>
                    <p>Kirkland Signature</p>
                    <p>Logo and Media Requests</p>
                    <p>Product Videos</p>
                    <p>The Costco Connection</p>
                    <p>Quick & Easy Recipe Videos</p>
                    <p>Costco Blog</p>
                    <p>Employee Site</p>
                    </div>

                    <div>
                    <h3>Membership</h3>
                    <p>Charitable Contributions</p>
                    <p> Join Now</p>
                    <p>Member Privileges</p>
                    <p>Executive Membership</p>
                    <p>Terms</p>
                    <p>Sign In or Register</p>
                    <p>Credit Card</p>

                    <h3>Vendors & Suppliers</h3>
                    <p>Supply Chain Disclosure</p>
                    <p>Ethics Hotline for Suppliers</p>
                    <p>Supplier Diversity</p>
                    <p>Explore Our Brands</p>
                    </div>

                    <div>
                    <h3>Customer Service</h3>
                    <p>Costco Shop Card</p>
                    <p>Balance</p>
                    <p>Order By Item Number</p>
                    <p>Concierge Tech Support & Warranty</p>
                    <p>Export & Domestic Volume Sales</p>
                    <p>Order Status</p>
                    <p>Preventing Fraud</p>
                    <p>Shipping</p>
                    <p>Rebates</p>
                    <p>Recalls  Product Notice</p>
                    <p>Returns and Exchanges</p>
                    <p>Return Policy</p>
                    <p>Accessibility</p>
                    </div>

                    <div>
                    <h3>Locations & Services</h3>
                    <p>Costco Shop Card</p>
                    <p>Balance</p>
                    <p>Order By Item Number</p>
                    <p>Concierge Tech Support & Warranty</p>
                    <p>Export & Domestic Volume Sales</p>
                    <p>Order Status</p>
                    <p>Preventing Fraud</p>
                    <p>Shipping</p>
                    <p>Rebates</p>
                    <p>Recalls  Product Notice</p>
                    <p>Returns and Exchanges</p>
                    <p>Return Policy</p>
                    <p>Accessibility</p>
                    </div>
                    </div><hr/>

                    <div className='wdth-95 ds-n'>
                        <div className='wdth-95-mgs'>
                            <p >Get Email Offers</p>
                            <input type="text" placeholder="Enter your email" />
                        </div><hr/>
                        
                    </div>

                    <div className='wdth-95 ds-n'>
                        <div className='wdth-95-mg'>
                            <div className='flex'>
                                <p>About Us</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                            <div className='flex'>
                                <p>Membership</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                            <div className='flex'>
                                <p>Vendors & Suppliers</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                            <div className='flex'>
                                <p>Customer Service</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                            <div className='flex'>
                                <p>Location & Service</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                            <div className='flex'>
                                <p>United States</p>
                                <p><AiOutlinePlus className=' black'/></p>
                            </div><hr/>
                        </div>
                    </div>

                    <div className="footer-3">
                    <div className="footer-link-3">
                    <p>Site Map</p>
                    <p>Terms and Conditions</p>
                    <p>Your Privacy Rights</p>
                    <p>CA Notice</p>
                    <p>Cookie Settings</p>
                    <p>Privacy Choices</p>
                    <p>Feedback</p>
                    </div>
                    </div>

                    <div className='mv-fotter-icon'>
                        <div>
                            <div className="social-icons">
                                <div><img src={SocialIcon1} alt=""/></div>
                                <div><img src={SocialIcon2} alt=""/></div>
                                <div><img src={SocialIcon3} alt=""/></div>
                                <div ><img src={SocialIcon4} alt=""/></div>
                            </div>
                        </div>

                    </div>

                    <div className="footer-4">
                        <p>© 1998 — 2023 Costco Wholesale Corporation. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </div>

    )
}
export default Footer;