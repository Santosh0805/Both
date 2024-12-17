import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CostcoContext = createContext();

function CostcoProvider(props) {
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [login, setLogin] = useState({});
    const [online, setOnline] = useState(false)
    const [userID, setUserID] = useState({})

    console.log(userID)

    useEffect(() => {
      const rawData = localStorage.getItem("Costco_USER");
      if (rawData) {
        setIsLoggedIn(true);
        let localData = JSON.parse(rawData)
        setUserID(localData)
      }
    }, []);

    const localStorageCart = localStorage.getItem("social-cart");

    useEffect(() => {
        if(localStorageCart){
          let CartData = JSON.parse(localStorageCart);
          setCart(CartData);
        }

    }, [localStorageCart]);

  const addToCart = (product) => {
    let cartData = [...cart];
    let checkDataExist = cartData.find((data) => {
        return data._id === product._id;
    });
    if (checkDataExist) {
      
        toast.success("Product in cart");
        return;
    }
   
    toast.success("product added to cart");
   let newProduct = {...product, qty:1, totalPrice: product.price};
   cartData.push(newProduct);
    setCart(cartData);
    localStorage.setItem("social-cart", JSON.stringify(cartData));
    console.log(cartData)
};



const increaseCartQty = (product) => {
  let initialCart = [...cart];
  initialCart.find((productItem) => {
    if(productItem._id === product._id) {
      productItem.qty += 1;
      productItem.totalPrice = productItem.qty * productItem.price;
    }
      
  })
  setCart(initialCart);
  localStorage.setItem("social-cart", JSON.stringify(initialCart));
   
};

const decreaseCartQty = (product) => {
  let initialCart = [...cart];
  initialCart.find((productItems) => {
    if(productItems._id === product._id) {
        if(productItems.qty > 1) {
          productItems.qty -= 1;
          productItems.totalPrice = productItems.qty * productItems.price;
        }
    }
  });
  console.log(initialCart)
  setCart(initialCart);
  localStorage.setItem("social-cart", JSON.stringify(initialCart));

}

const deleteCartProduct = (product) => {
  let initialCart = [...cart];
  let productItems = initialCart.filter((productItem) => {
       return productItem._id !== product._id;
  });
  setCart(productItems);
  localStorage.setItem("social-cart", JSON.stringify(productItems));

}
  return <CostcoContext.Provider value={{cart, setCart, addToCart, increaseCartQty, decreaseCartQty, deleteCartProduct,isLoggedIn, setIsLoggedIn,online, setOnline, userID, setUserID, login, setLogin, }}>{props.children}</CostcoContext.Provider>
}

export default CostcoProvider;