import {Link} from 'react-router-dom';
import Logo2 from '../images/costcoLogoIdentityIntro@3x.png';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Signup(){
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
     const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        membershipNumber: ""
     });

     const submitForm = (e) => {
        e.preventDefault();
        const userData = {
          name: user.name,
          phoneNumber: user.phoneNumber,
          email: user.email,
          password: user.password,
          membershipNumber: user.membershipNumber,
          product: [],
        };
      
        if (user.name === "" || user.email === "" || user.password === "" || user.phoneNumber === "") {
          setErr(true);
        } else {
          axios.post("http://localhost:5000/signup", userData)
            .then((resp) => {
              console.log(resp.data);
              setErr(false);
              toast.success("Sign up successful.");
              navigate("/signin");
            })
            .catch((error) => {
              console.error(error);
              toast.error("Sign up unsuccessful. Please try again.");
            });
          setUser({
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            membershipNumber: "",
          });
          setErr(false);
        }
      };
      

    return(
        <div>
            <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div><Link to='/' ><img className="logo2" src={Logo2} alt=""/></Link></div>
                </div>
            </nav>
            <div className="create-acct"><p>Create Account</p></div>
            <div className='signin-form'>
            <form onSubmit={submitForm}>
        
                <div className="form-data">

            <div><input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Name"/></div>
            {err === true && user.name === "" ? <span className='span'>Name required</span> : null}
            
            <div><input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email Address"/></div>
            {err === true && user.email === "" ? <span className='span'>Email required</span> : null}

            <div><input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password"/></div>
            {err === true && user.password === "" ? <span className='span'>Password required</span> : null}

            <div><input type="text" value={user.phoneNumber} onChange={(e) => setUser({...user, phoneNumber: e.target.value})} placeholder="Phone Number"/></div>
            {err === true && user.phone === "" ? <span className='span'>Phone Number required</span> : null}

            <div><input type="text" value={user.membershipNumber} onChange={(e) => setUser({...user, membershipNumber: e.target.value})} placeholder="Memebership Number (Optional)"/></div>
            <div><Link to=''><p>Where can i find my membership number?</p></Link></div>
            <div className="consent"> 
                <div></div><input type="checkbox" className="checked"/><div></div>
                <div><p >Yes, I would like to receive emails about special 
                    promotions and new product information from Costco. Costco will not rent
                     or sell your email address.
                </p></div>
            </div>

            <div><h6>By creating an account you agree to Costco.com <Link to=''>terms and conditions </Link>
            of use</h6></div>

            <div className="signup-btn"><button>Create Account</button></div>
                </div>
           </form>
           </div>

           <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div className='signup-nav-flex'>
                        <p>Terms and Conditions</p>
                        <p>Privacy Rights</p>
                    </div>
                    <p>© 1998 — 2023 Costco Wholesale Corporation. All rights reserved.</p>
                </div>
            </nav>
        </div>
    )
}
export default Signup;