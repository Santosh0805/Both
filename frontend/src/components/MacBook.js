import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import MacBookimg1 from '../images/23w06036-half-banner-apple.jpg';
import MacBookimg2 from '../images/506x126_mac_v4.jpg';
import MacBookimg3 from '../images/macbookpro16.jpg';
import MacBookimg4 from '../images/macbookpro14.jpg';
import MacBookimg5 from '../images/macbookair13.jpg';
import MacBookimg6 from '../images/macbookpro13.jpg';
import MacBookimg7 from '../images/apple-mac-comparison.jpg';
import MacBookimg8 from '../images/imageService (51).jpg';
import MacBookimg9 from '../images/imageService (52).jpg';
import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom";
import { CostcoContext } from "./Context/CostcoContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MacBook(){
    
    const { _id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {addToCart, increaseCartQty, decreaseCartQty} = useContext(CostcoContext);

    useEffect(() => {
        fetch("http://localhost:3008/product/" + _id)
        .then((resp) => resp.json())
        .then((data) => {

            const productWithQty = {...data, qty: 1};
            setProduct([productWithQty]);
            // setProduct([data]);
            setLoading(false)
        });
        
    },[_id]);

    console.log( product)
      
    return(
        <div>
            <Nav/>
            <div className="shop-computer-con1">
                <div className="shopComputer-con1">
                    <div><Link to='/' className="menu2-text">Home </Link></div>
                    <div><Link to='/shopcomputer' className="menu2-text">Computers </Link></div>
                    <div><Link to='/shop-apple' className="menu2-text">Apple Products</Link></div>
                    <div><p>MacBooks</p></div>
                </div>
            </div>

            <div className="shop-macbook-con1">
                <div className="shopMacbook-con1">
                    <div className="shopMacbook-div">
                        <div className="shopMacbook-text1 flex">
                            <p>Filter Results</p>
                            <p>Clear All</p>
                        </div><hr/>

                        <div className="shopMacbook-div-h4"><h4>Category</h4></div>

                        <div className="shopMacbook-div-cat">Select a different Category</div>

                        <div className="shopMacbook-div-p">
                            <p>Computers</p>
                            <p>Laptops & Notebook Computers</p>
                        </div>
                        <p>MacBook Pro Air</p><hr/>
                    </div>

                    <div className="shopMacbook-div">
                       <div className="shopMacbook-text2">
                           <p>MacBook Pro & Air</p>
                        </div> 

                        <div className="shopMacbook-img1">
                           <div><img src={MacBookimg2} alt=""/></div>
                           <div><img src={MacBookimg1} alt=""/></div>
                        </div> 

                        <div className="wdth-95" >
                            <div className="shopModel"><p>Shop By Model</p></div>
                            <div className="shopMacbook-shopModel">
                                <div className="shopMacbook-shopModel-bd"><img src={MacBookimg3} alt=""/>
                                    <p>MacBook Pro 16"</p>
                                </div>
                                <div className="shopMacbook-shopModel-bd"><img src={MacBookimg4} alt=""/>
                                <p>MacBook Pro 14"</p>
                                </div>
                                <div className="shopMacbook-shopModel-bd"><img src={MacBookimg5} alt=""/>
                                <p>MacBook Air 13"</p>
                                </div>
                                <div className="shopMacbook-shopModel-bd"><img src={MacBookimg6} alt=""/>
                                <p>MacBook Pro 13"</p>
                                </div>
                                <div className="shopMacbook-shopModel-bd"><img src={MacBookimg7} alt=""/>
                                <p>Compare MacBook Models</p>
                                </div>

                            </div>

                            <div>
                                <div>
                                    <label>Sort by</label> 
                                    <select>
                                        <option className="options">
                                            Best Match
                                        </option>
                                    </select>
                                    
                                </div>

                                <div className="options-btn">
                                    <button>Delivery</button>
                                    <button>Show out of Stock Items</button>
                                </div><hr/>
                            </div>

                            {loading === true ? (
                                <div className="shop-computer-con1"> Data Loading, please wait</div>
                            ) : (
                                product.map((product) => (
                                <div className="shopMacbook-tocart" key={product._id}>
                                    <div><img src={ product.image} alt="product" /></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>${product.price}</h3>
                                        <h5>{product.name}</h5>

                                        <div>
                                            <ul>
                                                <li>{product.description}</li>
                                                <li>Quantity: {product.quantity}</li>
                                                <li>Category: {product.category.title}</li>
                                            </ul>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                            <button onClick={() => decreaseCartQty(product)} className="addcart-decr">-</button>
                                            <span className="addcart-num">{product.qty}</span>
                                            <button onClick={() => increaseCartQty(product)} className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button onClick={() => addToCart(product)}>Add</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                ))
                            )} 

                            <div>
                                <div className="shopMacbook-tocart">
                                    <div><img src={MacBookimg8} alt=""/></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>$799.99</h3>
                                        <p>After $150 OFF</p>
                                        <h5>MacBook Air 13.3" - Apple M1 Chip 8-core CPU, 7-core GPU - 8GB Memory - 256GB SSD Space Gray</h5>

                                        <div>
                                        <ul>
                                            <li>Apple M1 Chip 8-core CPU, 7-core GPU</li>
                                            <li>256GB SSD storage</li>
                                            <li>8GB unified memory</li>
                                            <li>13.3" Retina display</li>
                                            <li>18 hour battery life</li>
                                        </ul>
                                        </div>

                                        <div className="shopMacbook-star">(1625)</div>
                                        <div className="shopMacbook-cp">
                                            <input type="checkbox" className="check"/>
                                            <p>Compare Product</p>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                               <button className="addcart-decr">-</button>
                                               <button className="addcart-num">1</button>
                                               <button className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button onClick={() => addToCart(product)}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>

                            <div>
                                <div className="shopMacbook-tocart">
                                    <div><img src={MacBookimg9} alt=""/></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>$1999.99</h3>
                                        <h5>MacBook Pro (16-inch) - Apple M1 Pro Chip with 10-Core CPU and 16-Core GPU, 512GB SSD</h5>

                                        <div>
                                        <ul>
                                            <li>Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance</li>
                                            <li>10-core CPU delivers faster performance to fly through pro workflows quicker than ever³</li>
                                            <li>16-core GPU with faster performance for graphics-intensive apps and games³</li>
                                            <li>16-core Neural Engine for up to 5x faster machine learning performance³</li>
                                            <li>Longer battery life, up to 21 hours¹</li>
                                        </ul>

                                        <p>More Colors Available</p>
                                        </div>

                                        <div className="shopMacbook-star">(1625)</div>
                                        <div className="shopMacbook-cp">
                                            <input type="checkbox" className="check"/>
                                            <p>Compare Product</p>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                            <button className="addcart-decr">-</button>
                                            <button className="addcart-num">1</button>
                                            <button className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>

                            <div>
                                <div className="shopMacbook-tocart">
                                    <div><img src={MacBookimg4} alt=""/></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>$1999.99</h3>
                                        <h5>MacBook Pro (16-inch) - Apple M1 Pro Chip with 10-Core CPU and 16-Core GPU, 512GB SSD</h5>

                                        <div>
                                        <ul>
                                            <li>Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance</li>
                                            <li>10-core CPU delivers faster performance to fly through pro workflows quicker than ever³</li>
                                            <li>16-core GPU with faster performance for graphics-intensive apps and games³</li>
                                            <li>16-core Neural Engine for up to 5x faster machine learning performance³</li>
                                            <li>Longer battery life, up to 21 hours¹</li>
                                        </ul>

                                        <p>More Colors Available</p>
                                        </div>

                                        <div className="shopMacbook-star">(1625)</div>
                                        <div className="shopMacbook-cp">
                                            <input type="checkbox" className="check"/>
                                            <p>Compare Product</p>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                            <button className="addcart-decr">-</button>
                                            <button className="addcart-num">1</button>
                                            <button className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>

                            <div>
                                <div className="shopMacbook-tocart">
                                    <div><img src={MacBookimg3} alt=""/></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>$1999.99</h3>
                                        <h5>MacBook Pro (16-inch) - Apple M1 Pro Chip with 10-Core CPU and 16-Core GPU, 512GB SSD</h5>

                                        <div>
                                        <ul>
                                            <li>Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance</li>
                                            <li>10-core CPU delivers faster performance to fly through pro workflows quicker than ever³</li>
                                            <li>16-core GPU with faster performance for graphics-intensive apps and games³</li>
                                            <li>16-core Neural Engine for up to 5x faster machine learning performance³</li>
                                            <li>Longer battery life, up to 21 hours¹</li>
                                        </ul>

                                        <p>More Colors Available</p>
                                        </div>

                                        <div className="shopMacbook-star">(1625)</div>
                                        <div className="shopMacbook-cp">
                                            <input type="checkbox" className="check"/>
                                            <p>Compare Product</p>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                            <button className="addcart-decr">-</button>
                                            <button className="addcart-num">1</button>
                                            <button className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>

                            <div>
                                <div className="shopMacbook-tocart">
                                    <div><img src={MacBookimg5} alt=""/></div>
                                    <div className="shopMacbook-tocart-text">
                                        <h3>$1999.99</h3>
                                        <h5>MacBook Pro (16-inch) - Apple M1 Pro Chip with 10-Core CPU and 16-Core GPU, 512GB SSD</h5>

                                        <div>
                                        <ul>
                                            <li>Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance</li>
                                            <li>10-core CPU delivers faster performance to fly through pro workflows quicker than ever³</li>
                                            <li>16-core GPU with faster performance for graphics-intensive apps and games³</li>
                                            <li>16-core Neural Engine for up to 5x faster machine learning performance³</li>
                                            <li>Longer battery life, up to 21 hours¹</li>
                                        </ul>

                                        <p>More Colors Available</p>
                                        </div>

                                        <div className="shopMacbook-star">(1625)</div>
                                        <div className="shopMacbook-cp">
                                            <input type="checkbox" className="check"/>
                                            <p>Compare Product</p>
                                        </div>

                                        <div className="addcart-btn">
                                            <div className="grid-3">
                                            <button className="addcart-decr">-</button>
                                            <button className="addcart-num">1</button>
                                            <button className="addcart-incr">+</button>
                                            </div>

                                            <div className="addcart-btn2">
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ToastContainer />
            <Footer/>

        </div>
    )
}
export default MacBook;