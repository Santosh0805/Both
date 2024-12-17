import {Link} from 'react-router-dom';
import Logo from '../images/costcoLogoIdentityIntro@3x (1).png';
import NavImg from '../images/23w07136-grocery-2dy.png'
import NavImg1 from '../images/imageService (53).avif'
import {FaShoppingCart} from 'react-icons/fa';
import {RiAccountCircleLine} from 'react-icons/ri';
import {MdLocationPin} from 'react-icons/md';
import {BsBoxSeam} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {AiOutlineIdcard} from 'react-icons/ai';
import {CiViewList} from 'react-icons/ci';
import {MdPayment} from 'react-icons/md';
import {CgUserList} from 'react-icons/cg';
import {GrMapLocation} from 'react-icons/gr';
import {MdCardMembership} from 'react-icons/md';
import {ImPaypal} from 'react-icons/im';
import {GoSignOut} from 'react-icons/go';
import { useContext, useEffect, useState } from 'react';
import { CostcoContext } from './Context/CostcoContext';
import {ImUser} from 'react-icons/im';

function Nav(){
     const{cart, isLoggedIn, setIsLoggedIn}= useContext(CostcoContext);
     const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
        const rawData = localStorage.getItem("Costco_USER");
        if (rawData) {
          setIsLoggedIn(true);
        }
      }, []);

      const handleLogout = () => {
        try {
          localStorage.removeItem('Costco_USER');
          setIsLoggedIn(false);
        } catch (error) {
          console.error('Error while handling logout:', error);
        }
      };
    
    return(
        <div>
            <nav className="first_nav">
                <div className="first_nav_div">
                    <div className="first_nav_menu">
                        <p>Costco Next</p>
                        <p>While Supplies Last</p>
                        <p>Treasure Hunt</p>
                        <p>What's New</p>
                        <p>Same-Day</p>
                        <p>Online-Only</p>
                        <p>Warehouse Savings</p>
                        <p>Get Email Offers</p>
                        <p>Customers Service</p>
                        <p>US</p>
                    </div>
                </div>

                <div className="second_nav_div">
                    <div className="second_nav_menu">
                        <div className="nav-flexx">
                            <div > <Link to='/' ><img className="logo" src={Logo} alt="" /></Link></div>
                            <div><input type="text" placeholder="Search" /></div>
                        </div>
                        {isLoggedIn ? (
                        <div className='custome flex'>
                            <div className='welcome-note menu1-text'><p className='newpost' onClick={() => setIsOpen(true)}>Account</p></div>
                            <div className="menu1-text"><p>Orders & Return</p></div>
                            <div className="cart-icon">
                                <div className='carts'><FaShoppingCart /></div>
                                <Link to="/cart"> <div className='cart-count'>{cart.length}</div></Link>
                                <div className='cart-blue'>Cart</div>
                            </div>

                            {isOpen && (
                            <div className='popup'>
                          <div className='flex'>
                          <div className='popup-welcome'>Welcome!</div>
                          <div onClick={() => setIsOpen(false)} className='popup-welcome'>X</div>
                          </div><hr></hr>

                   <div className='popup-link'>
                       <p><RiAccountCircleLine className='popup-icon' />Account Home</p><hr></hr>
                       <p><BsBoxSeam className='popup-icon'/> Orders & Purchases</p><hr></hr>
                       <p><CgUserList className='popup-icon'/> Account Details</p><hr></hr>
                       <p><MdCardMembership className='popup-icon'/> Renew Membership</p><hr></hr>
                       <p><GrMapLocation className='popup-icon'/> Address Book</p><hr></hr>
                       <p><MdPayment className='popup-icon'/> Payment Methods</p><hr></hr>
                       <p><ImPaypal className='popup-icon'/> Costco Pay</p><hr></hr>
                       <p><CiViewList className='popup-icon'/> Lists</p><hr></hr>
                       <p><CiSettings className='popup-icon'/> Preferences</p><hr></hr>
                       <p><AiOutlineIdcard className='popup-icon'/> Digital Membership Card</p><hr></hr>
                       <p onClick={handleLogout}><GoSignOut className='popup-icon'/>Sign Out</p>
                   </div>
                   
                            </div>
                            )}
                        </div>
                        ) : (
                        <div className=" custome flex">
                            <Link to='/signin' className="menu1-text"><p >Sign in / Register</p></Link>
                            <div className="menu1-text"><p>Orders & Return</p></div>
                            <div className="cart-icon">
                                <div className='carts'><FaShoppingCart /></div>
                                <Link to="/cart"> <div className='cart-count'>{cart.length}</div></Link>
                                <div className='cart-blue'>Cart</div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </nav>

            <header className="main_nav">
                <div className="main_nav_menu ">
                    <div className="menuu you"><Link to="/shopcomputer">Shop</Link>
                        <ul className="ul2">
                            <div className="ul2-links">
                                <li><Link to='/shopcomputer'><p className="luggage1">Appliances</p></Link ></li>
                                <li><Link to='/shopcomputer'><p className="luggage1">Baby</p></Link ></li>
                                <li><Link to='/shopcomputer'><p className="luggage1">Beauty</p></Link ></li>
                                <li><Link to='/shopcomputer'><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                <li><Link to='/shopcomputer'><p className="luggage1">Computer</p></Link ></li>
                                <li><Link to='/shopcomputer'><p className="luggage1">Costco NEXT</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                               <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                            </div>
                        </ul>
                    </div>

                    <div className="menuu"><Link to=''>Grocery</Link >
                        <ul className="ul2 ">
                            <div className="flex">
                                <div className="ul2-links">
                                    <div>Groceries & Household</div>
                                        <li><Link to=''><p className="luggage1">Appliances</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Baby</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Beauty</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Computer</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Costco NEXT</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                    </div>
    
                                <div className="ul2-links">
                                    <div>Three Ways to Shop</div>
                                    <h4>Delivery Methods:</h4>
                                    <h4>Standard</h4>
                                    <p className='green'>Same-Day Delivery</p>
                                    <h5 className='bluee'>2-Day Delivery</h5>

                                    <div className='nav-img-2'>
                                        <div><img src={NavImg} alt=""/></div>
                                    </div>
                            
                                </div>
                            </div>
                        </ul>
                    </div>

            <div className="menuu"><Link to=''>Same-Day</Link >
                <div className="ul2 center">
                    <h3>Quickest Delivery</h3>
                    <h3>Same-Day in Most Areas</h3>
                    <img src="" alt=""/>
                    <h3>Prices and Availabily Will Vary</h3>
                    <button>Shop Same-Day Now</button>
                </div>
            </div>

            <div className="menuu"><Link to=''>Deals</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div>Shop Deals by Department</div>
                            <div className='nav-flex'>
                                <div>
                                        <li><Link to=''><p className="luggage1">Appliances</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Baby</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Beauty</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Computer</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Costco NEXT</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                        
                                </div>
                                <div>
                                    <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>

                                </div>
                            </div>
                            <div className='blue-button'><button>Shop All Deals</button></div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div className='menuu'><Link to=''>Bussiness Delivery</Link >
            <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div>Shop Deals by Department</div>
                            <div className='nav-flex'>
                                <div>
                                        <li><Link to=''><p className="luggage1">Appliances</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Baby</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Beauty</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Computer</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Costco NEXT</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                        
                                </div>
                                <div>
                                    <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>

                                </div>
                            </div>
                            <div className='blue-button'><button>Shop All Deals</button></div>
                        </div>
    
                                
                    </div>
                </ul></div>
            <div className='menuu'><Link to=''>Optical</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div>Shop Deals by Department</div>
                            <div className='nav-flex'>
                                <div>
                                    <li><Link to=''><p className="luggage1">Shop Optical</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">HealthyEyes</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Eyeglasses - <span className='span'>New!</span></p></Link ></li>  
                                </div>
                                <div>
                                    <li><Link to=''><p className="luggage1">Sunglasses</p> </Link ></li>
                                    <li><Link to=''><p className="luggage1">Contact Lenses</p> </Link ></li>
                                    <li><Link to=''><p className="luggage1">Reading Glasses</p> </Link ></li>
                                </div>
                            </div>
                            <div className='light-blue'>
                                <div className='light-blue-text'>
                                    <div>Lenses</div>
                                    <div>Optimize your sight</div>
                                </div>
                                <div className='light-blue-text-2'>Learn More</div>
                            </div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div className='menuu'><Link to=''>Pharmacy</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div className='nav-flex'>
                                <div>
                                    <li><Link to=''><p className="luggage1">Warehouse Pickup</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Mail Order</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Memeber Prescription Drugs & Prices</p></Link ></li>  
                                </div>
                                <div>
                                    <li><Link to=''><p className="luggage1">Imunization</p> </Link ></li>
                                    <li><Link to=''><p className="luggage1">Pet Medications</p> </Link ></li>
                                </div>
                            </div>
                            <div className='nav-img'>
                                <div><img src={NavImg1} alt=""/></div>
                            </div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div className='menuu'><Link to=''>Services</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            
                            <div className='nav-grid'>
                                <div>
                                    <div>Insurance</div>
                                        <li><Link to=''><p className="luggage1">Auto & Home Insurance</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Business Health Isurance</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Life Insurance</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Pet Insurance</p></Link ></li>   
                                </div>
                                <div>
                                   <div>Home</div>
                                    <li><Link to=''><p className="luggage1">Bottle Water Delivery</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Check & Forms</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                </div>
                                <div>
                                   <div>Auto</div>
                                    <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                </div>
                                <div>
                                   <div>Bussiness</div>
                                    <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                </div>
                                <div>
                                   <div>Home Improvement</div>
                                    <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>

                                </div>
                            </div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div><Link to=''>Photo</Link ></div>
            <div className='menuu'><Link to=''>Travel</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div>Shop Deals by Department</div>
                            <div className='nav-flex'>
                                <div>
                                    <li><Link to=''><p className="luggage1">Shop Travel</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Vacation Packages</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Cruises </p></Link ></li>  
                                    <li><Link to=''><p className="luggage1">Rental Cars </p></Link ></li>  
                                    <li><Link to=''><p className="luggage1">Hotels</p></Link ></li>  
                                </div>
                                <div>
                                    <li><Link to=''><p className="luggage1">What's New</p> </Link ></li>
                                    <li><Link to=''><p className="luggage1">Theme Parks</p> </Link ></li>
                                    <li><Link to=''><p className="luggage1">Executive Members</p> </Link ></li>
                                </div>
                            </div>
                            <div className='light-blue'>
                                <div className='light-blue-text'>
                                    <div>Member's Top Rated</div>
                                    <div>Vacations</div>
                                </div>
                                <div className='light-blue-text-2'>View Deals</div>
                            </div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div className='menuu'><Link to=''>Membership</Link >
                <ul className="ul2 ">
                    <div className="flex">
                        <div className="ul2-links">
                            <div className=''>
                                <div>
                                    <li><Link to=''><p className="luggage1">Shop Membership</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Rewnew Membership</p></Link ></li>
                                    <li><Link to=''><p className="luggage1">Why Become A Member</p></Link ></li>  
                                </div>
                            </div>
                            <div className='nav-img-1'>
                                <div><img src={NavImg1} alt=""/></div>
                            </div>
                        </div>
    
                                
                    </div>
                </ul>
            </div>
            <div><Link to=''>Locations</Link ></div>
        </div>
            </header>

            <div className='mv-nav'>
                <div className='mv-nav-flex'>
                    <div > <Link to='/' ><img className="logo" src={Logo} alt="" /></Link></div>
                    {isLoggedIn ? (
                        <div className='flex blue'>
                 
                           <div>
                            <MdLocationPin/>
                            <p> Warehouses</p>
                           </div>

                           <div>
                            <ImUser className='popup-icon black' />
                            <Link to='/myaccount' className="menu1-text"><p >Account</p></Link>
                           </div>
                        
                           <div>
                            {/* {cart.length}<FaShoppingCart /> */}
                            <Link to="/cart"> <div >{cart.length}<FaShoppingCart className=' black'/></div></Link>
                            <p>Cart</p>
                           </div>
                        
                       
                        </div>
                       ) : (
                        <div className='flex blue'>
                 
                           <div>
                                <MdLocationPin/>
                                <p> Warehouses</p>
                            </div>

                            <div>
                                <ImUser className='popup-icon black' />
                                <Link to='/signin' className="menu1-text"><p >Account</p></Link>
                            </div>
                        
                            <div>
                                <Link to="/cart"> <div >{cart.length}<FaShoppingCart className=' black'/></div></Link>
                                <p>Cart</p>
                            </div>
                        
                       
                        </div>
                       )
                    }
                </div>

                <div className='hamb-flex'>
                    <div class="hamburger_container mg">
                        <label for="menu_check">&#9776;Shop</label> 
                        <input type="checkbox" id="menu_check" />
                        <div class="hide_nav_container"><br/>
                            <nav>
                                <ul>
                                    
                                   <li><Link to="/shopcomputer">Shop</Link></li>
                                   <li><Link to="/shopcomputer" className='hamburger-link'>Grocery</Link></li>
                                   <li><Link to="/shopcomputer" className='hamburger-link'>Same Deal</Link></li>
                                   <li><Link to="/shopcomputer">Deals</Link></li>
                                   <li><Link to="/shopcomputer">Bussiness Delivery</Link></li>
                                   <li><Link to="/shopcomputer">Optical</Link></li>
                                   <li> <Link to="/shopcomputer">Pharmacy</Link></li>
                                   <li><Link to="/shopcomputer">Services</Link></li>
                                   <li><Link to="/shopcomputer">Travel</Link></li>
                                   <li><Link to="/shopcomputer">Photo</Link></li>
                                   <li><Link to="/shopcomputer">Membership</Link></li>
                                   <li><Link to="/shopcomputer">Locations</Link></li>

                                </ul>
                        
                 

                            </nav>   
                
                        </div>  
                   
                    </div>
                    <div><input type="text" placeholder="Search" /></div>
                </div>

                
            </div>

            <div className="delivery_route">
            <div className="flex">
            <div className="flex">
                <div>
                    <div className='css-1ucojbm'>My Warehouse</div>
                    <div className='css-6ny8wu '>
                        <h3><MdLocationPin/></h3> 
                        <h4>Seattle</h4>
                    </div>
                </div>

                <div>
                    <div className='css-1ucojbm'>Delivery Location</div>
                    <div className='css-6ny8wu'> 
                        <h3><BsBoxSeam/> </h3>
                        <h4>98101</h4>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <p className='p-1'>List</p>
                <span>/</span>
                <div className='p-2'>Buy Again </div>
            </div>
            </div>
            </div><hr></hr>

            <div className="mv-delivery_route">
           
            <div className="flex-mv">
                <div>
                    <div className='css-1ucojbm'>My Warehouse</div>
                    <div className='css-6ny8wu '>
                        <h3><MdLocationPin/></h3> 
                        <h4>Seattle</h4>
                    </div>
                </div>

                <div>
                    <div className='css-1ucojbm'>Delivery Location</div>
                    <div className='css-6ny8wu'> 
                        <h3><BsBoxSeam/> </h3>
                        <h4>98101</h4>
                    </div>
                </div>
            </div>

           
          
            </div><hr></hr>
            
        </div>

    )
}
export default Nav;