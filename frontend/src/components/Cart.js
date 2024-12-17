import Nav from '../components/Nav';
import CreditImg from '../images/costco-citi-visa-credit-card.webp';
import Footer from './Footer';
import {useState, useEffect, useContext} from "react" ;
import { CostcoContext } from "./Context/CostcoContext";
import Checkout from './pages/Checkout';
function Cart(){
    let cart_product = localStorage.getItem("social-cart");
    const [cartProduct, setCartProduct] = useState([]);
    const [err, setErr] = useState(true);
    const [isRemove, setIsRemove] = useState(false);

    const {cart,increaseCartQty, decreaseCartQty, deleteCartProduct} = useContext(CostcoContext);

    useEffect (() => {
        if (cart_product){
            setCartProduct(JSON.parse(cart_product));
            setErr(false)
        }
    }, [cart_product]);

    console.log(cartProduct)
    
    return(
        <div>
            <Nav/>
            
            <div className='cart-con'>
                <div className='cart-product'>
                    <div>
                        <div className='cart-list'>
                            <div>
                                <p>Cart ({cart.length} Item)</p>
                            </div>
                        </div><hr/>

                        <div>
                            {err === true ? (
                                <div>No product in Cart</div>
                            ) : (
                               cartProduct.map((productItems) => (
                                <div className='cart-products' key={productItems._id}>
                                    <div><img src={productItems.image} alt=""/></div>
                                    <div className='cart-product-list'>
                                        <h4>{productItems.description}</h4>
                                        <h4>{productItems.name}</h4>
                                        <p>$ {productItems.price}</p>
                                        <p>{productItems.quantity}</p>

                                        <div className="addcart-btn">
                                            <div className='marg'>
                                                <button onClick={() => decreaseCartQty(productItems)} className="addcart-decr">-</button>
                                                <span className="addcart-num">{productItems.qty}</span>
                                                <button onClick={() => increaseCartQty(productItems)} className="addcart-incr">+</button>
                                            </div>

                                            <div >
                                                <button onClick={() => setIsRemove(true)} >Remove</button>
                                            </div>
                                        </div>
                                                {isRemove && (
                                                    <div className='remove-popup'>

                                                        <div className=''>
                                                           <p>"Do you want to remove product?"</p>
                                                           <div className='remove-popups'>
                                                                <button  onClick={ () => deleteCartProduct(productItems) }>yes</button>
                                                                <button  onClick={() => setIsRemove(false)} className='popup-welcome'>No</button >
                                                            </div>
                                                        </div>
                   
                                                    </div>
                                                )}
                                    </div>
                                </div>
                            ))
                        )}
                        </div><hr/>
                    
                    </div>

                    <div>
                    
                        <div className='cart-list2'>
                            <div className='flex2'>
                                 <div><img src={CreditImg} className="credit-img" alt=""/></div>
                                 <p>Apply for the Costco Anywhere Visa® Card by Citi</p>
                            </div>
                            <p>Earn 2% Cash Back on your Costco purchases. Exclusively for Costco members.</p>
                            <p className='text-center'>Apply Today</p>
                    
                        </div>

                        <Checkout product={cartProduct} />
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default Cart;