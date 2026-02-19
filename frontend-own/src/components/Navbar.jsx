import { ShoppingCart } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import Login from '@/pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setUser } from '@/redux/userSlice'
import { setCart } from '@/redux/productSlice'

const Navbar = () => {
  
    const { user } = useSelector(store => store.user)
    const { cart } = useSelector(store => store.product)

    const dispatch = useDispatch()
    const navigate = useNavigate()
     const admin = user?.role === "admin" ? true : false
    // const API = "http:///api/v1/cart";
     const accessToken = localStorage.getItem('accessToken')



    const logoutHandler = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    const res = await axios.post(
      `${(import.meta.env.VITE_URL || import.meta.env.VITE_API_URL || "http://localhost:8000")}/api/v1/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      dispatch(setUser(null));
      dispatch(setCart({ items: [] }));
      localStorage.removeItem("accessToken");
      toast.success(res.data.message);
      navigate("/login");
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Logout failed");
  }
};


    
    // const loadCart = async () => {
    //     try {
    //         const res = await axios.get(API, {
    //             headers: { Authorization: `Bearer ${accessToken}` },
    //         })
    //         if (res.data.success) {
    //            // dispatch(setCart(res.data.cart));
    //         }
    //     } catch (error) {
    //         console.log(error);

    //     }
    // };
    // useEffect(()=>{
    //     loadCart()
    // },[dispatch])
    
    return (
        <header className='bg-pink-50 fixed w-full z-20 border-b border-pink-200'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
                {/* logo section */}
                <div>
                    <img src="/Ekart.png" alt="" className='w-25'/>
                    {/* <h1 className='font-bold text-2xl'>Ekart</h1> */}
                </div>
                {/* nav section */}
                <nav className='flex gap-10 justify-between items-center'>
                    <ul className='flex gap-7 items-center text-xl font-semibold'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/products'}><li>Products</li></Link>
                        {
                            user && <Link to={`/profile/${user._id}`}><li>Hello, {user.firstName}</li></Link>
                        }

                         {/* {
                            user && <Link to={`/profile`}><li>Hello, {user.firstName}</li></Link>
                        } */}

                        {
                            admin && <Link to={'/dashboard/sales'}><li>Dashboard</li></Link>
                        }
                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <ShoppingCart />
                        <span className='bg-pink-500 rounded-full absolute text-white -top-3 -right-5 px-2'>{cart?.items?.length || 0}</span>
                    </Link>
                    {
                        user ? <Button onClick={logoutHandler} className='bg-pink-600 text-white cursor-pointer'>Logout</Button> :
                            <Button onClick={() => navigate('/login')} className='bg-linear-to-tl from-blue-600 to-purple-600 text-white cursor-pointer'>Login</Button>
                    }
                    {/* {
                      user?<Button className='bg-pink-600 text-white cursor-pointer'>Logout</Button>:
                      <Button className='bg-gradient-to-t1 from-blue-600 to-purple-600 text-white cursor-point '>Login</Button>
                    } */}

                </nav>

            </div>
        </header>
    )
}

export default Navbar