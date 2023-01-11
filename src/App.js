import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import { useState, createContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const EbukaContext = createContext()


const Root = () =>{

  
  const [qty, setQty] = useState(0)

  const [cart, setCart] = useState([])

  const[showcart, setShowCart] = useState(false)

  const toggleCart=()=>{
    setShowCart(!showcart)
  }

  const updateCart =(productname, cartqty, itemlist) =>{
    
    setQty((prev)=>prev + cartqty);

    console.log("item list", itemlist)
    

    setCart((prev)=>[...prev, itemlist])

    toast.success(`You've added ${productname} to your cart`)
  }

  useEffect(()=>{console.log("cart useeffect", cart)},[cart])


  return(
    <>
    <EbukaContext.Provider value={{updateCart, qty, cart, toggleCart}}>

    <ToastContainer/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </EbukaContext.Provider>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);


function App() {
 
  //console.log("Ebuka cntext", EbukaContext)

 // const [qty, setQty] = useState(0)


  return (
    
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  
  );
}

export default App;
