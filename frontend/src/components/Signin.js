import Logo2 from '../images/costcoLogoIdentityIntro@3x.png';
import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { CostcoContext } from './Context/CostcoContext';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Signin(){
    const { setUserID, setOnline,} = useContext(CostcoContext)
    const navigate = useNavigate()
    const [err, setErr] = useState(false);
    const [user, setUser] = useState({
       email: "",
       password: "",
    });
    let login = user;
    
    const submitForm =(e) => {
        e.preventDefault();
        if ( user.email ==="" || user.password ==="" ){
          setErr(true);
        }else {
            axios.post("mongodb://localhost:27017/costco", login)
            .then((resp) => {
                console.log(resp.data)
                if(resp.data.msg === 'Login successful'){
                    console.log(resp.data);
                localStorage.setItem('Costco_USER', JSON.stringify(resp.data))
                setOnline(true)
                let rawData = localStorage.getItem("Costco_USER")
                let localData = JSON.parse(rawData)
        
                setUserID(localData)
                setUser({
                    ...user,
                    lastLogin: new Date(localData.lastLogin).toLocaleString(),
                });
                    toast.success("successfully logged in");
                    navigate("/");
                }else{
                    toast.error("invalid user please signup..");
                    
                }
             
            })
            
        }
     };

    return(
        <div>
            <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div ><Link to='/' ><img className="logo2" src={Logo2} alt=""/></Link></div>

                </div>
            </nav>

            <div className="create-acct"><p>Sign In</p></div>
            <div className='signin-form'>
            <form onSubmit={submitForm}>
        
                <div className="form-data">
            
                    <div><input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email Address"/></div>
                    {err === true && user.email === "" ? <span className='span'>Email required</span> : null}

                    <div><input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password"/></div>
                    {err === true && user.password === "" ? <span className='span'>password required</span> : null}
            
                    <div><Link to=''><p>Forgot Password?</p></Link></div>
                    <div className="consent"> 
                        <input type="checkbox" className="checked"/>
                        <p className="signup-p3">Keep me signed in</p>
                    </div>
                 
                <div className="signup-p4">Check this box only when on a private device.</div>
        

                <div className="signup-btn"><button>Sign In</button></div>
                <div><p className="signup-p3">New to Costco?</p></div>
                </div>
            </form>
            <div className="signup-btn2"><button><Link to='/signup' className="menu-text"><p>Create Account</p></Link></button></div>
            </div>

            <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div className='signup-nav-flex'>
                        <p>Terms and Conditions</p>
                        <p>Privacy Rights</p>
                    </div>
                    <p>© 1998 — 2024 Costco Wholesale Corporation. All rights reserved.</p>
                </div>
            </nav>
            <ToastContainer />
        </div>

        
    )
}
export default Signin;