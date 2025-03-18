import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

 export let CartContext = createContext();

 export default function CartContextProvider({children}){

        let headers = {
            token : localStorage.getItem("userToken")
        }
        const [cart, setCart] = useState(null);
        const [loading, setLoading] = useState(false);
        const [heart, setHeart] = useState(null)



                async function addProductToCart(productId) {
            setLoading(true)
            try {
                let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
                    productId
                } , {
                    headers
                });
                toast.success("Successfully Add Product!" , { 
                    duration: 1000,
                    
                });
                setCart(data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }

        async function AddHeartList(productId) {
            
                try {
                    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
                        productId
                    } , {
                        headers
                    });
                    console.log(data);
                    toast.success("added successfully to your wishlist!" , { 
                        duration: 1000,
                        
                    });
    
                } catch (error) {
                    console.log(error);
                }
            
        }

          async function getHeartList() {
            try {
                  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
                    headers
                });
                console.log(data);
                setHeart(data)
            } catch (error) {
                console.log(error);
            }
        }
    
      
    
        async function checkout(shippingAddress) {
            setLoading(true)
            try {
                let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173` , {
                    shippingAddress
                } , {
                    headers
                });
                window.location.href = data.session.url
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }

        async function updateProductCount(productId , count) {

            if (count > 0) {
                setLoading(true)
                try {
                    let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
                        count
                    } , {
                        headers
                    });
                    
                    setCart(data)
                    
                    setLoading(false)
                    
                } catch (error) {
                   
                    setLoading(false)
                    
                }
            }
      
       
        }

        async function getCart() {
            setLoading(true)
            try {
                let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart` ,{
                    headers
                });
                
                setCart(data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }
   
        async function deleteProduct(productId) {
            setLoading(true)
            try {
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
                    headers
                });
                
                setCart(data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }


        async function deletedHeart(productId) {
            setLoading(true)
            try {
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` , {
                    headers
                });
                
                setHeart(data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }

        async function clearCart() {
            setLoading(true)
            try {
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
                    headers
                });
                
                setCart(data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                
            }
        }

        useEffect(()=> {
            getCart()
            getHeartList()
        } , []);



    return<CartContext.Provider value={{addProductToCart , getHeartList  , heart , deletedHeart, AddHeartList ,deleteProduct, loading , clearCart , getCart , checkout  , setCart,  cart , updateProductCount}}>
        {children}
    </CartContext.Provider>
 }