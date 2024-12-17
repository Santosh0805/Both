import Nav from '../components/Nav';
import HomeImg1 from '../images/d-samsung-march-hoops.jpeg';
import HomeImg2 from '../images/d-23w08040-fq-hero-hot-buys-march23-end.jpg';
import HomeImg3 from '../images/23w08032-slide-tech-days.jpg';
import HomeImg6 from '../images/23w08083-sides-cazebo.jpg';
import HomeImg7 from '../images/23WEB.08085-side-4000026606-1.png';
import HomeImg8 from '../images/23WEB.08085-side-1720906-7.png';
import HomeImg9 from '../images/23w08084-side-2761858-1.png';
import HomeCon5Img1 from '../images/4-corners-refrigerators.png'
import HomeCon5Img2 from '../images/4-corners-laundry.png'
import HomeCon5Img3 from '../images/4-corners-dishwashers.png'
import HomeCon5Img4 from '../images/4-corners-ranges.png'
import HomeCon5Img5 from '../images/4-corners-tvs.png'
import HomeCon5Img6 from '../images/4-corners-computers.png'
import HomeCon5Img7 from '../images/4-corners-apple.png'
import HomeCon5Img8 from '../images/4-corners-audio.png'
import HomeCon5Img9 from '../images/4-corners-kirkland-signature.png'
import HomeCon5Img10 from '../images/4-corners-pet-supplies.png'
import HomeCon5Img11 from '../images/4-corners-apparel.png'
import HomeCon5Img12 from '../images/4-corners-coffee.png'
import HomeCon5Img13 from '../images/4-corners-sectional-sofas.png'
import HomeCon5Img14 from '../images/4-corners-patio.png'
import HomeCon5Img15 from '../images/4-corners-mattresses.png'
import HomeCon5Img16 from '../images/4-corners-gazebos.png';
import HomeCon6Img from '../images/20230320_MKT_Montreal_US_ComHero_D (2).jpg';
import HomeCon7Img1 from '../images/imageService.jpg';
import HomeCon7Img2 from '../images/imageService (10).jpg';
import HomeCon7Img3 from '../images/imageService.jpg';
import HomeCon7Img4 from '../images/imageService (10).jpg';
import HomeCon7Img5 from '../images/imageService (4).jpg';
import HomeCon7Img6 from '../images/4-corners-apple.png';
import HomeCon7Img7 from '../images/imageService (6).jpg';
import HomeCon7Img8 from '../images/imageService (10).jpg';
import HomeCon8Img1 from '../images/23w06173-march-mvm-toptrio.jpg';
import HomeCon8Img2 from '../images/23w06178-homepage-grid-lg-v2.jpg';
import HomeCon8Img3 from '../images/23w06178-homepage-grid-hilary-radley.jpg';
import HomeCon8Img4 from '../images/23w06178-homepage-grid-lg-breath-right-v2.jpg';
import HomeCon8Img5 from '../images/23w06178-homepage-grid-zyrtec-v2.jpg';
import HomeCon8Img6 from '../images/23w06178-homepage-grid-spring-pharm-v3.jpg';
import HomeCon9Img1 from '../images/4-corners-apparel.png';
import HomeCon9Img2 from '../images/imageService (27).jpg';
import HomeCon9Img3 from '../images/imageService (28).jpg';
import HomeCon9Img4 from '../images/imageService (29).jpg';
import HomeCon9Img5 from '../images/imageService (30).jpg';
import HomeCon9Img6 from '../images/imageService (31).jpg';
import HomeCon9Img7 from '../images/imageService (32).jpg';
import HomeCon9Img8 from '../images/imageService (33).jpg';
import HomeCon9Img9 from '../images/imageService (34).jpg';
import HomeCon9Img10 from '../images/imageService (35).jpg';
import HomeCon10Img1 from '../images/23w07136-grocery-same-day.png';
import HomeCon10Img2 from '../images/23w07136-grocery-2dy.png';
import HomeCon10Img3 from '../images/23w07136-next-products.png';
import HomeCon11Img1 from '../images/23w06173-march-mvm-toptrio.jpg';
import HomeCon11Img2 from '../images/23w06173-march-mvm-toptrio.jpg';
import HomeCon11Img3 from '../images/23w06173-march-mvm-toptrio-firestone-v2.png';
import HomeCon3Img1 from '../images/half-hero1-23w08020_Samsung_March_Madness.jpg';
import HomeCon3Img2 from '../images/side-kick-1-23w08020_Samsung_March_Madness.jpg';
import HomeCon3Img3 from '../images/side-kick-2-23w08020_Samsung_March_Madness.jpg';
import HomeCon3Img4 from '../images/side-kick-3-23w08020_Samsung_March_Madness.jpg';
import HomeCon3Img5 from '../images/side-kick-4-23w08020_Samsung_March_Madness.jpg';
import HomeCon10Img4 from '../images//image001.png';
import HomeCon10Img5 from '../images/13404_Costco_Jet_Vacuum_Homepage_Banner_658x326_v1b.jpg';
import HomeCon10Img6 from '../images/GEP385-DixieUltra-LargeAd-Toolkit_658x326_ad3B.jpg';
import HomeCon12Img1 from '../images/imageService (8).jpg';
import HomeCon12Img2 from '../images/imageService (9).jpg';
import HomeCon12Img3 from '../images/imageService (10).jpg';
import HomeCon12Img4 from '../images/imageService (11).jpg';
import HomeCon12Img5 from '../images/imageService (12).jpg';
import HomeCon4Img1 from '../images/3-across-bottom-row-wsl.jpg';
import HomeCon4Img2 from '../images/3-across-bottom-row-treasure.jpg';
import HomeCon4Img3 from '../images/3-across-bottom-row-new.jpg';
import Footer from './Footer';

function Home (){
    return(
        <div>
            <Nav/>
            <div className="container">
                <div><img src={HomeImg1} alt=""/></div>
            </div>

            <div className="container2">
                <div className="container2-img2"><img src={HomeImg2} alt=""/></div>
            </div>

            <div className="container3">
                <div className="container3-imgs">
                    <div className="container3-slide-imgs">
                        <div className="slides">
                            <div><img src={HomeImg3} alt=""/></div>
                            <div><img src={HomeImg3} alt=""/></div>
                            <div><img src={HomeImg3} alt=""/></div>
                            <div><img src={HomeImg3} alt=""/></div>
                        </div>
                    </div>

                    <div className="container3-img2">
                        <div><img src={HomeImg6} alt=""/>
                        <span>$1,599.99 After $500 OFF</span></div>
                        <div>
                            <img src={HomeImg7} alt=""/>
                        <span>$899.99 After $170 OFF</span>
                        <h3>Ends Today!</h3></div>
                        <div><img src={HomeImg8} alt=""/>
                        <span>$1,399.99 After $400 OFF</span></div>
                        <div><img src={HomeImg9} alt=""/>
                        <span>Shop Appliance Deals</span></div>
                    </div>
                </div>

            </div>

            <div className="container4">
                <div className="container4-imgs">
                    <div><img src={HomeCon4Img1} alt=""/></div>
                    <div><img src={HomeCon4Img2} alt=""/></div>
                    <div><img src={HomeCon4Img3} alt=""/></div>
                </div>
            </div>

            <div className="container5">
                <div className="container5-imgs">
                    <div className="container5-div">
                        <div className="container5-text"><h2>Appliances</h2></div>
                        <div className="container5-imgs-set">
                            <div><img src={HomeCon5Img1} alt=""/>
                                <span>Refridgerator</span>
                            </div>
                            <div><img src={HomeCon5Img2}  alt=""/>
                                <span>Laundry</span>
                            </div>
                            <div><img src={HomeCon5Img3}  alt=""/>
                                <span>Dishwashers</span>
                            </div>
                            <div><img src={HomeCon5Img4}  alt=""/>
                                <span>Rangers</span>
                            </div>
                        </div>
                    </div>

            <div className="container5-div">
                <div className="container5-text"><h2>Electronics</h2></div>
                <div className="container5-imgs-set">
                <div><img src={HomeCon5Img5}  alt=""/>
                <span>TVs</span></div>
                <div><img src={HomeCon5Img6}  alt=""/>
                <span>Computers</span></div>
                <div><img src={HomeCon5Img7}  alt=""/>
                <span>Apple</span></div>
                <div><img src={HomeCon5Img8}  alt=""/>
                <span>Audio</span></div>
                </div>
            </div>

            <div className="container5-div">
                <div className="container5-text"><h2>Essentials</h2></div>
                <div className="container5-imgs-set">
                <div><img src={HomeCon5Img9}  alt=""/>
                <span>kirkland signature</span></div>
                <div><img src={HomeCon5Img10}  alt=""/>
                <span>Pet Supplies</span></div>
                <div><img src={HomeCon5Img11}  alt=""/>
                <span>Apparel</span></div>
                <div><img src={HomeCon5Img12}  alt=""/>
                <span>Coffee</span></div>
                </div>
            </div>


            <div className="container5-div">
                <div className="container5-text"><h2>Furniture</h2></div>
                <div className="container5-imgs-set">
                <div><img src={HomeCon5Img13}  alt=""/>
                <span>sectional Sofas</span></div>
                <div><img src={HomeCon5Img14}  alt=""/>
                <span>Patio</span></div>
                <div><img src={HomeCon5Img15}  alt=""/>
                <span>mattresses</span></div>
                <div><img src={HomeCon5Img16}  alt=""/>
                <span>Gazebos</span></div>
                </div>
            </div>

            
               </div>
            </div>

            <div className="container6">
                <div className="container6-img">
                    <div><img src={HomeCon6Img} alt=""/></div>
                </div>
            </div>

            <div className="container7">
            <div className="container7-img">
            <div><img src={HomeCon7Img1} alt=""/>
            <span>Maison Francis Kurkdjian Parfum</span></div>
            <div><img src={HomeCon7Img2} alt=""/>
            <span>$3,999.99 After $1,000 OFF</span></div>
            <div><img src={HomeCon7Img3} alt=""/>
            <span>$80 - $120 OFF</span></div>
            <div><img src={HomeCon7Img4} alt=""/>
            <span>$149.99 eDelivery</span></div>
                </div>
            </div>

            <div className="container7">
                <div className="container7-img">
            <div><img src={HomeCon7Img5} alt=""/>
            <span>$ 100 OFF</span></div>
            <div><img src={HomeCon7Img6} alt=""/>
            <span>$3,999.99 After $1,000 OFF</span></div>
            <div><img src={HomeCon7Img7} alt=""/>
            <span>$80 - $700 OFF</span></div>
            <div><img src={HomeCon7Img8} alt=""/>
            <span>$119.99 After $50 OFF</span></div>
                </div>
            </div>

            <div className="container8">
                <div className="container8-img">
                    <div><img src={HomeCon8Img1} alt=""/>
                        <span>Available in-Warehouse & Online</span>
                    </div>
                    <div><img src={HomeCon8Img2} alt=""/>
                    <span>LIMIT VARIES</span></div>
            <div><img src={HomeCon8Img3} alt=""/>
            <span>LIMIT 10 EACH</span></div>
            <div><img src={HomeCon8Img4} alt=""/>
                <span>LIMIT 5 EACH</span></div>
            <div><img src={HomeCon8Img5} alt=""/>
                <span>Select items also available for delivery at the higher price.</span></div>
            <div><img src={HomeCon8Img6} alt=""/>
                <span>$119.99 After $50 OFF</span></div>
                </div>
            </div>

            <div className="container9">
                <div><p>Spring Apparel</p></div>
                <div className="container9-img">
            <div><img src={HomeCon9Img1} alt=""/>
            <span>$14.99</span>
            <span><p className='span-p'>
				Jachs Girlfriend Ladies' Short Sleeve Blouse
			</p></span>
            </div>
            <div><img src={HomeCon9Img2} alt=""/>
            <span>$14.99</span>
            <span><p className='span-p'>
				IZOD Men’s Flat Front Short
			</p></span>
            </div>
            <div><img src={HomeCon9Img3} alt=""/>
            <span>$14.99</span>
            <span><p className='span-p'>
				BCBG Girls Youth Dress & Romper Set
			</p></span>
            </div>
            <div><img src={HomeCon9Img4} alt=""/>
                <span>$14.99</span>
                <span><p className='span-p'>
                    Carter's Infant 4-piece Diaper Cover Set, Alligator
                </p></span>
            </div>
            <div><img src={HomeCon9Img5} alt=""/>
                <span>$14.99</span>
                <span><p className='span-p'>
                    Briggs Ladies' Tiered Linen Blend Dress
                </p></span>
            </div>
        </div>
        </div>

        <div className="container9">
            <div><p>Deals on Bedroom Collections</p></div>
                <div className="container9-img">
            <div><img src={HomeCon9Img6} alt=""/>
            <span>$2599.99</span>
            <span>$2599.99 After $700 0ff</span>
            <span><p className='span-p'>
				Jachs Girlfriend Ladies' Short Sleeve Blouse
			</p></span>
            </div>
            <div><img src={HomeCon9Img7} alt=""/>
                <span>$2599.99</span>
                <span>$2599.99 After $700 0ff</span>
            <span><p className='span-p'>
				IZOD Men’s Flat Front Short
			</p></span>
            </div>
            <div><img src={HomeCon9Img8} alt=""/>
            <span>$999.99</span>
            <span>Item Qualifies for Costco Direct Buy More Save More</span>
            <span><p className='span-p'>
				BCBG Girls Youth Dress & Romper Set
			</p></span>
            </div>
            <div><img src={HomeCon9Img9} alt=""/>
                <span>$2599.99</span>
                <span>$2599.99 </span>
                <span><p className='span-p'>
                    Carter's Infant 4-piece Diaper Cover Set, Alligator
                </p></span>
            </div>
            <div><img src={HomeCon9Img10} alt=""/>
                <span>$2599.99</span>
                <span>$2599.99 After $700 0ff</span>
                <span><p className='span-p'>
                    Briggs Ladies' Tiered Linen Blend Dress
                </p></span>
            </div>
            </div>
        </div>

        <div className="container-10">
        <div className="container-10-product">
            <div className="container-10-products">
                <div className="container-10-text1">
                    <h3 >Same-Day</h3>
                    <p>Fresh, frozen & household essentials delivered.</p>
                    <img src={HomeCon10Img1} alt=""/>
                </div>

                <div className="container-10-text2">
                    <h3>2-Day</h3>
                    <p>Non-perishable food & houshold essentials delivered.</p>
                    <img src={HomeCon10Img2} alt=""/>
                </div>

                <div className="container-10-text2">
                    <h3>Buy direct from high-end brands at a Costco price</h3>
                    <p>Fresh, frozen & household essentials delivered.</p>
                    <img src={HomeCon10Img3} alt=""/>
                </div>
            </div>
        </div>
        </div>

        <div className="container-11">
        <div className="container-10-product">
            <div className="container-11-img">
                <div className="container-10-img">
                    <img src={HomeCon11Img1} alt=""/>
                </div>

                <div className="container-10-img">
                    <img src={HomeCon11Img2} alt=""/>
                </div>

                <div className="container-10-img">
                    <img src={HomeCon11Img3} alt=""/>
                </div>
            </div>
        </div>
        </div>

        <div className="container3">
        <div className="container3-imgs">
            <div><img src={HomeCon3Img1} alt=""/></div>
            <div className="container3-img2">
                <div><img src={HomeCon3Img2} alt=""/>
                <span>$1,599.99 After $500 OFF</span></div>
                <div><img src={HomeCon3Img3} alt=""/>
                <span>$899.99 After $170 OFF</span>
                <h3>Ends Today!</h3></div>
                <div><img src={HomeCon3Img4} alt=""/>
                <span>$1,399.99 After $400 OFF</span></div>
                <div><img src={HomeCon3Img5} alt=""/>
                <span>Shop Appliance Deals</span></div>
            </div>
        </div>
        </div>

        <div className="container-10">
        <div className="container-10-product">
            <div className="container-10-products">
                <div className="container-10-text1">
                    <img src={HomeCon10Img4} alt=""/>
                    <h4 >Same-Day</h4>
                    <p>Fresh, frozen & household essentials delivered.</p>
                </div>

                <div className="container-10-text2">
                    <img src={HomeCon10Img5} alt=""/>
                    <h4 >Same-Day</h4>
                    <p>Non-perishable food & houshold essentials delivered.</p>
                </div>

                <div className="container-10-text2">
                    <img src={HomeCon10Img6} alt=""/>
                    <h4>Buy direct from high-end brands at a Costco price</h4>
                    <p>Fresh, frozen & household essentials delivered.</p>
                </div>
            </div>
        </div>
        </div>

        <div className="container-12">
        <div className="container-12-product">
            <div><p>Costco NEXT</p></div>
            <div className="container-12-products">
                <div>
                  <div><img src={HomeCon12Img1} alt=""/></div>
                  <p>Jupiter</p>
                  <p>Ready for Adventure with Jupiter</p>
                </div>

                <div>
                    <div><img src={HomeCon12Img2} alt=""/></div>
                    <p>Jupiter</p>
                    <p>Ready for Adventure with Jupiter</p>
                </div>

                <div>
                    <div><img src={HomeCon12Img3} alt=""/></div>
                    <p>Jupiter</p>
                    <p>Ready for Adventure with Jupiter</p>
                </div>

                <div>
                    <div><img src={HomeCon12Img4} alt=""/></div>
                    <p>Jupiter</p>
                    <p>Ready for Adventure with Jupiter</p>
                </div>

                <div>
                    <div><img src={HomeCon12Img5} alt=""/></div>
                    <p>Jupiter</p>
                    <p>Ready for Adventure with Jupiter</p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Home;