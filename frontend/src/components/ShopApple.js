import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import ShopAppleimg1 from '../images/d-23w07063-cat-hero-electronics-apple.jpg';
import ShopAppleimg2 from '../images/23w-06044_apple_tile_macbook.png';
import ShopAppleimg3 from '../images/23w0190-apple-watch-v.png';
import ShopAppleimg4 from '../images/23w-06044_apple_tile_mac_studio-v.avif';
import ShopAppleimg5 from '../images/23w0415-apple-tile-ipad.png';
import ShopAppleimg6 from '../images/23w0190-iphone-lp-family.png';
import ShopAppleimg7 from '../images/23w0190-apple-airpods.png';
import ShopAppleimg8 from '../images/21w990-apple-tile-tv.png';
import ShopAppleimg9 from '../images/22w0774-apple-services.png';
import ShopAppleimg10 from '../images/22w03225-apple-tile-biz.png';
import ShopAppleimg11 from '../images/22w03225-apple-tile-biz.png';
import ShopAppleimg12 from '../images/23w0190-apple-phobio-family.png';

function ShopApple(){
    return(
        <div>
            <Nav/>
            <div className="shop-computer-con1">
                <div className="shopComputer-con1">
                    <div><Link to='/' className="menu2-text">Home </Link></div>
                    <div><p>Apple Products</p></div>
                </div>
            </div>

            <div className="shop-apple-nav">
                <div className="shop-apple">
                    <div className="apple-nav">
                        <p>Authorized Reseller</p>
                        <p>MacBook</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>Apple Watch</p>
                        <p>iPhone</p>
                        <p>Audio</p>
                        <p>Apple TV 4K</p>
                        <p>Accessories</p>
                        <p>AppleCare+</p>
                        <p>Apple for small Bussiness</p>
                    </div>
                </div>
            </div>

            <div className="shop-apple-con1">
                <div className="shopApple-con1">
                    <div><img src={ShopAppleimg1} alt=""/></div>
                </div>
            </div>

            <div className="shop-apple-con2">
                <div className="shopApple-con2">
            <div className="shopApple-con2-product">
                <Link to='/macbook' className="link-text"><h3>MacBook</h3></Link>
                <img src={ShopAppleimg2} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Apple Watch</h3>
                <img src={ShopAppleimg3} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Mac</h3>
                <img src={ShopAppleimg4} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>iPad</h3>
                <img src={ShopAppleimg5} alt=""/>
            </div>
           
            <div className="shopApple-con2-product">
                <h3>iPhone</h3>
                <img src={ShopAppleimg6} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Audio</h3>
                <img src={ShopAppleimg7} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Apple TV 4K</h3>
                <img src={ShopAppleimg8} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Apple Services</h3>
                <img src={ShopAppleimg9} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>AppleCare+</h3>
                <img src={ShopAppleimg10} alt=""/>
            </div>
            <div className="shopApple-con2-product">
                <h3>Apple for Small Business</h3>
                <img src={ShopAppleimg11} alt=""/>
            </div>
            
                </div>
            </div>

            <div className="shop-apple-con3">
                <div className="shopApple-con3">
                    <div>
                        <img src={ShopAppleimg12} alt=""/>
                    </div>
                    <div className="shopApple-con3-text">
                        <h3>Trade-up to a new Apple device</h3>
                        <p>and receive a Costco Shop Card as payment</p>
                    </div>
                </div><hr/>
            </div>

            <div className="shop-apple-con4">
                <div className="shopApple-con4">
                    <p>Apple, the Apple logo, AirPlay, AirPort Express, Apple TV, FaceTime, iBooks, iPad,
                       iPhone, iPod touch, iSight, iTunes, Mac, and Safari are trademarks of Apple Inc.,
                       registered in the U.S. and other countries. Multi-Touch and Retina are trademarks
                       of Apple Inc. AppleCare and iCloud are service marks of Apple Inc., registered
                       in the U.S. and other countries. App Store and iBooks Store are service marks 
                       of Apple Inc.
                    </p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default ShopApple;