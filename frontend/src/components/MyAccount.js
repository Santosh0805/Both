import {RiAccountCircleLine} from 'react-icons/ri';
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
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyAccount(){
    const{cart, isLoggedIn, setIsLoggedIn}= useContext(CostcoContext);

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
        <Nav/>
        <div className='myaccount'>
            <div className='flex'>
                <div className='popup-welcome'>Welcome!</div>
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
        <Footer/>
    </div>
)
}
export default MyAccount;