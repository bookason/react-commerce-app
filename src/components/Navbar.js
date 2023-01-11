import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Person, ShoppingCart } from "@mui/icons-material";
import { EbukaContext } from "../App";
import Cartcontent from "./Cartcontent";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 80px;
  border-bottom: 1.5px solid #ddd;
`;

const Rightcontent = styled.div`
  flex: 2;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-left: 2rem;
`;

const Navitem = styled.span`
  > a {
    text-decoration: none;
    color: inherit;
    font-size: 17.5px;
  }
`

const Centercontent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #5cc5e2;

  & ${Navitem} > a{
    font-size: 2rem;
  }
`;

const Leftcontent = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 2;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
`;



const Iconcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Shoppingbox = styled.span`
  position: relative;
  cursor: pointer;
`;
const Badge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: #fff;
  top: -18px;
  right: -15px;
  background-color: #5cc5e2;
`;

const Cartmodal = styled.div`
  position: absolute;
  top: 100%;
  right: 10px;
  background-color: whitesmoke;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 10;
  padding: 1rem;
`;

const Navbar = () => {
  const { updateCart, qty, cart } = useContext(EbukaContext);
  //console.log("cart from navbar", cart);

 // useEffect(()=>{console.log("cart from useeffect", cart)},[cart])

const[showcart, setShowCart] = useState(false)

const [carttotal, setCartTotal] = useState(0)





const updateCartTotal = (sum) =>{
    const total = carttotal + sum
    setCartTotal(total);
}



 const toggleCart=()=>{
   setShowCart(!showcart)
   setCartTotal(0)
   }
  return (
    <Wrapper>
      <Rightcontent>
        <Navitem>
          <Link to="/">Home</Link>
        </Navitem>
        
      </Rightcontent>
      <Centercontent><Navitem>
          <Link to="/">Logo</Link>
        </Navitem></Centercontent>
      <Leftcontent>
        <Navitem>
          <Link to="/about">About</Link>
        </Navitem>
        <Navitem>
          <Link to="/contact">Contact</Link>
        </Navitem>
        <Navitem>
          <Link to="/privacy">Privacy Policy</Link>
        </Navitem>
        <Iconcontainer>
          <Person />
          <Shoppingbox onClick={toggleCart}>
            <ShoppingCart />
            <Badge>{qty}</Badge>
          </Shoppingbox>
        </Iconcontainer>
      </Leftcontent>
      {showcart && 
      
      <Cartmodal>
        {qty < 1 ? "cart empty" :
        
        cart.map(item=>(
            <Cartcontent item={item} updateCartTotal ={updateCartTotal}/>
        ))
        

        }
        {/* {cart.map(item=>(
            <Cartcontent item={item} updateCartTotal ={updateCartTotal}/>
        ))} */}

        <h3>Total</h3>
            <h4>${carttotal}</h4>
        
        </Cartmodal>}
    </Wrapper>
  );
};

export default Navbar;
