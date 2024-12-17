import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import ShopComputerimg1 from '../images/d-23w07182-cat-hero-nvdia.jpg';
import ShopCon4img1 from '../images/imageService (36).jpg';
import ShopCon4img2 from '../images/imageService (42).jpg';
import ShopCon4img3 from '../images/imageService (38).jpg';
import ShopCon4img4 from '../images/imageService (39).jpg';
import ShopCon4img5 from '../images/imageService (40).jpg';
import ShopCon5img1 from '../images/4-corners-apple.png';
import ShopCon5img2 from '../images/electronics-laptops-c.png';
import ShopCon5img3 from '../images/electronics-desktops-c.png';
import ShopCon5img4 from '../images/electronics-pc-gaming-c.png';
import ShopCon5img5 from '../images/electronics-routers-networking-c.png';
import ShopCon5img6 from '../images/electronics-monitors-c.png';
import ShopCon5img7 from '../images/electronics-tablets-c.png';
import ShopCon5img8 from '../images/electronics-printers-c.png';
import ShopCon5img9 from '../images/electronics-printer-ink-toner-c.png';
import ShopCon5img10 from '../images/electronics-hard-drives-memory-c.png';
import ShopCon5img11 from '../images/electronics-computer-accessories-c.png';
import ShopCon5img12 from '../images/electronics-software-c.png';
import ShopCon6img1 from '../images/apple-logo.jpg';
import ShopCon6img2 from '../images/hp-logo.jpg';
import ShopCon6img3 from '../images/dell-logo.jpg';
import ShopCon6img4 from '../images/lenovo-logo.jpg';
import ShopCon6img5 from '../images/lg-logo.jpg';
import ShopCon6img6 from '../images/acer-logo.jpg';
import ShopCon6img7 from '../images/msi-logo.jpg';
import ShopCon6img8 from '../images/microsoft-logo.jpg';
import ShopCon6img9 from '../images/asus-logo.jpg';
import ShopCon6img10 from '../images/samsung-logo.jpg';
import ShopCon6img11 from '../images/ibuypower-logo.jpg';
import ShopCon7img from '../images/d-23w07198-search-banner-apple-phobio.jpg';
import { useEffect, useState } from "react";



function ShopComputer(){
    const [loading, setLoading] = useState(true);
    const [postsData, setPostsData] = useState();
    const [macbookProduct, setmacbookProduct] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const filterTag = data.filter ((product) => {
                return product.category.title === "iPhone";
            } )
            setPostsData(filterTag);
            // setPostsData(data);
            console.log(filterTag)
            setLoading(false)
        });
        //  console.log(productsData.length)
        
    },[]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const filterTag = data.filter ((product) => {
                return product.category.title === "Macbook";
            } )
            setmacbookProduct(filterTag);
            // setPostsData(data);
            console.log(filterTag)
            setLoading(false)
        });
        //  console.log(productsData.length)
        
    },[]);
    return(
        <div>
            <Nav/>
            <div className="shop-computer-con1">
                <div className="shopComputer-con1">
                    <div><Link to='/' className="menu2-text">Home </Link></div>
                    <div><p>Computers</p></div>
                </div>
            </div>

            <div className="shop-computer-con2">
                <div><p>Computers</p></div>
                <div className="shopComputer-con2">
                    <button>Apple</button>
                    <button>Laptop Computers</button>
                    <button>Desktop & All in one Computer</button>
                    <button>PC Gaming</button>
                    <button>Routers, Wifi Extenders & Modems</button>
                    <button>Monitors</button>
                    <button>Tablets</button>
                </div>
                <div className="shopComputer-con2-link"><Link to=''>View More Computers Categories</Link></div>
            </div>

            <div className="shop-computer-con4">
                <div className="shop-computer-text"><p>iPhone 14  Product</p></div>
            </div>

            <div className="products">
                {loading === true ? (
                    <div>Data Loading, please wait....</div>
                ) : (
                    postsData.map((product) => (
                        <div key={product._id} className="product-card" >
                            <div className="shopComputer-product">
                            <Link to={`/macbook/${product._id}`}>
                               <img src={ product.image} alt="product" />
                               <p>{product.name}</p>
                              </Link>
                            </div>
                        </div>
        
                       ))
                )}
            </div>

            <div className="shop-computer-con4">
                <div className="shop-computer-text"><p>Macbook Product</p></div>
            </div>

            <div className="shop-computer-con3">
                <div className="shopComputer-con3">
                    <div><img src={ShopComputerimg1} alt=""/></div>
                </div>
            </div>

            <div className="shop-computer-con4">
                <div className="shop-computer-text"><p>Sponsored Product</p></div>
                <div className="shopComputer-con4">
            <div className="shopComputer-product">
                <img src={ShopCon4img1} alt=""/>
                <h3>$ 124.99</h3>
                <h6>$ 25 OFF</h6>
                <p>Microsoft Office Home and</p>
                <p>Student 2021 - plus $25</p>
                <p>Visa eGift Card (E-Deliverry)</p>
            </div>

            <div className="shopComputer-product">
                <img src={ShopCon4img2} alt=""/>
                <h3>$ 149.99</h3>
                <h6>$ 150 OFF</h6>
                <p>Lenovo IdealPad 1 15.6</p>
                <p>Laptop - Intel Pentium Silver</p>
                <p>N6000 - 1080Pp - Windows</p>
            </div>

            <div className="shopComputer-product">
                <img src={ShopCon4img3} alt=""/>
                <h3>$ 379.99</h3>
                <p>ASUS 14" C433TA 2 in 1</p>
                <p>Touchscreen Chromebook</p>
                <p>Laptop - Intel m3 -8100Y</p>
            </div>

            <div className="shopComputer-product">
                <img src={ShopCon4img4} alt=""/>
                <h3>$ 269.99</h3>
                <p>ASUA 14" CX1400</p>
                <p>Chromebook Laptop - Intel</p>
                <p>Celeron N3350 - 1080p</p>
                <p></p>
            </div>

            <div className="shopComputer-product">
                <img src={ShopCon4img5} alt=""/>
                <h3>$ 69.99</h3>
                <p>Microsoft 365 Personal 12</p>
                <p>Month Subscription - plus</p>
                <p>$10 Visa eGift Card E</p>
                <p></p>
            </div>

                </div>
            </div>

            <div className="shop-computer-con5">
                <div className="shop-computer5-text"><p>Shop by Category</p></div>
                <div className="shopComputer-con5">
            <div >
                <div className="shopComputer-con5-bk">
                <Link to='/shop-apple'><img src={ShopCon5img1} alt=""/></Link></div>
                <p className="shopComputer-5">Apple</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img2} alt=""/></div>
                <p className="shopComputer-5">Laptop Computers</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img3} alt=""/></div>
                <p className="shopComputer-5">Desktop & All in one Computers</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img4} alt=""/></div>
                <p className="shopComputer-5">PC Gaming</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img5} alt=""/></div>
                <p className="shopComputer-5">Routers, Wifi Extenders & Moderms</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img6} alt=""/></div>
                <p className="shopComputer-5">Monitors</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img7} alt=""/></div>
                <p className="shopComputer-5">Tablets</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img8} alt=""/></div>
                <p className="shopComputer-5">Printers</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk"></div>
                <img src={ShopCon5img9} alt=""/>
                <p className="shopComputer-5">Printer Ink & Toner</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img10} alt=""/></div>
                <p className="shopComputer-5">Hard Drives, SSD's & Data Storage</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img11} alt=""/></div>
                <p className="shopComputer-5">Computer Accessories</p>
            </div>

            <div>
                <div className="shopComputer-con5-bk">
                <img src={ShopCon5img12} alt=""/></div>
                <p className="shopComputer-5">Computer Software</p>
            </div>

            </div>
            </div>

            <div className="shop-computer-con6">
                <div className="shop-computer-text6"><p>Shop by Brand</p></div>
                <div className="shopComputer-con6">
                    <div className="shopComputer-product6">
                        <img src={ShopCon6img1} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img2} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img3} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img4} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img5} alt=""/>
                
                    </div>


                    <div className="shopComputer-product6">
                        <img src={ShopCon6img6} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img7} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img8} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img9} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img10} alt=""/>
                
                    </div>

                    <div className="shopComputer-product6">
                        <img src={ShopCon6img11} alt=""/>
                
                    </div>



                </div>
            </div>

            <div className="shop-computer-con7">
                <div className="shop-computer-7">
                    <div><img src={ShopCon7img} alt=""/></div>
                </div>
            </div>

            <div className="shop-computer-8">
                <p>Whether you’re a student, small business owner, or a professional working from a home,
                    you want a high-performance computer that fits both your needs and budget. At Costco,
                    you’ll find an impressive selection of desktop and laptop computers, tablets, printers
                    ,and more—all from your favorite brands!
                </p>
                <p className="shop-computer8-p2">Choosing the Best Computer for Your Needs</p>
                <p>Many people prefer <Link to=''>desktop computers</Link> for their large monitors, full sized keyboards,
                   power and extra features. That’s why Costco carries a large inventory of all-in-one
                   and gaming computers, touchscreen desktops, and computer towers. Choose from 
                   popular brands like Dell, Apple, Lenovo, and HP. We also offer a variety of gaming
                   monitors, as well as curved and flat <Link to=''>monitors & computer screens</Link> in various sizes
                   and resolutions.
                </p>
                <p>With <Link to=''>laptops & notebook computers</Link>, you get all the functionality of a desktop computer
                   in a sleek, portable package. They’re a smart choice for students and professionals 
                   who need a computer for meetings, classNamees, home, or travel. At Costco, you’ll find a 
                   variety of Dell laptops, Apple MacBooks Pro & Air, gaming laptops, Chromebooks, and 
                   more.
                </p>
                <p>Lightweight and compact, <Link to=''>tablets</Link> are fully-integrated devices that can be easily placed
                   in a handbag or jacket pocket, making them the perfect travel companion. They have 
                   easy to use touchscreens that are bright and responsive. And their long battery life
                   means you can enjoy hours of entertainment, from games to movies, without having to
                   recharge. Costco carries android tablets, Samsung tablets, iPad Pro, iPad mini, and
                   more.
                </p>

                <p className="shop-computer8-p2">Reliable Data Storage & Connectivity</p>
                <p>Whether your computer is for personal or professional use, the last thing you need to
                   worry about is losing important files or photos. For quality back-up and data storage,
                   shop Costco’s <Link to=''>hard drives & storage</Link>, which includes external hard 
                   drives with recovery function, microSD Cards, and USB flash drives. Enjoy a flawless 
                   Wi-Fi connection, with fast and reliable <Link to=''>routers & modems</Link> from Costco. We also carry 
                   range extenders and expanded Wi-Fi systems for your entire home, so you’ll enjoy 
                   high-performance Wi-Fi for all your devices.
                </p>
         
                <p className="shop-computer8-p2">Essential Computer Software & Computer Accessories</p>

                <p>At Costco, you’ll find <Link to=''>computer software</Link> from your favorite brands, like Quicken, Intuit, and Microsoft. We have personal finance software to help you create a will or manage your investments, as well as security software with antivirus protection. And for small business owners, we have software to help you produce invoices and estimates, or streamline your payroll system.</p>
                <p>We also offer <Link to=''>computer accessories</Link> like surge protectors with USB charging ports, 
                   webcams, and battery back-up systems. Improve productivity with a wireless keyboard
                   and headphones, or docking station. Take gaming to the next level with a new gaming
                   keyboard and mouse, computer speakers, or gaming headsets with customizable 
                   surround sound.
                </p>

                <p className="shop-computer8-p2">Best Printers for Your Home or Business</p>
                <p>From HP printers with 2-sided printing, to Canon printers with duplex capability, 
                   Costco has a variety of printers to meet everyone’s needs. Save time and money with 
                   computer printers that let you create documents from home. Produce beautiful color
                   images with inkjet printers, or increase speed and precision with a laser printer.
                   Send a print job from your mobile device with a convenient mobile printer. We also
                   have <Link to=''>printer ink & toner cartridges</Link> from your favorite brands, including Brother,
                   Epson, and Lexmark.
                </p>
            </div>
            <Footer/>

        </div>
    )
}
export default ShopComputer;