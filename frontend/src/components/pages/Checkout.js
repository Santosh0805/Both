import { useState, useEffect, useContext } from "react";
import { CostcoContext } from "../Context/CostcoContext";
import SuccessModal from './SuccessModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Checkout(props) {
  const { product } = props;
  const cart_product = localStorage.getItem("social-cart");
  const [cartProduct, setCartProduct] = useState([]);
  const [err, setErr] = useState(true);
  const {userID} = useContext(CostcoContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cart_product) {
      setCartProduct(JSON.parse(cart_product));
      setErr(false);
    }
  }, [cart_product]);

  let subtotal = 0;
  let totalPrice = 0;

  if (!err) {
    for (let i = 0; i < cartProduct.length; i++) {
      const product = cartProduct[i];
      subtotal += parseFloat(product.price);
      totalPrice += parseFloat(product.totalPrice);
    }
  }
  
  const addToCartt = async (products) => {
    try {
      const cartRequests = products.map(async (product) => {
        console.log("Product Name:", product.name); 
        const response = await fetch('http://localhost:3008/add-to-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productName: product.name,
            productId: product._id, 
            quantity: product.quantity,
            qty: product.qty,
            totalPrice: product.totalPrice,
            Price: product.price,
            userName: userID.data.name,
            user: userID.data.id, 
          }),
        });
  
        const data = await response.json();
        console.log(data.message);
      });
  
      await Promise.all(cartRequests);
      setShowModal(true);
      toast.success("Checkout successful!");
      localStorage.removeItem('social-cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div>
      {err === true ? (
        <div>No product in Cart</div>
      ) : (
        <div className='cart-list3'>
          <div className='flex'>
            <p>Subtotal</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>

          <div className='flex'>
            <p className='green'>Discount on Order</p>
            <p>-$0.00</p>
          </div>

          <div className='flex'>
            <p>Shipping & Handling</p>
            <p>$0.00</p>
          </div>

          <div className='blue'>400101</div>
          <hr />

          <div className='flex'>
            <p className='est-total'>Estimated Total</p>
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>
          <p>Applicable taxes will be calculated at checkout.</p>
          <div className='text-center checkout-btn'><button  onClick={() => addToCartt(product)}>Checkout</button></div>
          {showModal && <SuccessModal onClose={closeModal} />}
        </div>
      )}
       <ToastContainer />
    </div>
  );
}

export default Checkout;
