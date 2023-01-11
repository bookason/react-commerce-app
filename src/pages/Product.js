import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { EbukaContext } from "../App";

const Container = styled.div`
  padding: 5rem 2rem;
  display: flex;
  gap: 2rem;
`;
const Imgcontainer = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;
`;
const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 18vh;
  cursor: pointer;
`;

const Thumbnailimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Imgdisplay = styled.div`
  flex: 4;
  height: 70vh;
`;

const Productdetails = styled.div`
  flex: 3;
  /* display: flex; */
  padding: 0 2rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1``;

const Price = styled.h3``;

const Desc = styled.p``;

const Bottomcontent = styled.div`
  display: flex;
  gap: 2rem;
  width: 40%;
`;

const Counter = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex: 2;
`;
const Counterdisplay = styled.span`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
`;

const Counterbutton = styled.button`
flex: 1;
border: none;
cursor: pointer;
padding: 0.5rem;
transition: all 0.2s ease-in;

&:hover{
  background-color: #ddd;
}
`;

const Addtocart = styled.button`
  flex: 3;
  background-color: teal;
  border: none;
  transition: all 0.2s ease-in;
  color: white;
  cursor: pointer;

  &:hover{
    opacity: 0.85;
  }
`;

const Product = () => {
  const location = useLocation();

  const state = location.state;

  const [qty, setQty] = useState(1);

  //console.log(state);
  const [img, setImg] = useState(state.img1);
  const updateImg = (position) => {
    console.log(position);
    if (position === "first") {
      setImg(state.img1);
    }
    if (position === "second") {
      setImg(state.img2);
    }
  };

  const updateQty = (operation) =>{
    if (operation ==="minus"){
      setQty((prev)=>prev ===1 ? 1 : prev-1 );
    } else{
      setQty((prev)=>prev+1)
    }

    

  }

  

  console.log("qty", qty)

  const {updateCart, qtyr, cart} = useContext(EbukaContext)


  const [itemlist, setItemList] = useState(
    {
      url: "",
      name: "",
      price: "",
      qty: ""
    }
  )

  

  useEffect(()=>{

    setItemList(
      {
      name: state.title,
      price: state.price,
      qty: qty
      }
    )

  }, [state.title, state.price, qty])



  

  const updateCartList=()=>{
    setItemList({
      name: state.title,
      price: state.price,
      qty: qty
    })
  }

  
  

  return (
    <Container>
      <ToastContainer/>

      <Imgcontainer>
        <Thumbnail>
          <Thumbnailimg src={state.img1} onClick={() => updateImg("first")} />
          <Thumbnailimg src={state.img2} onClick={() => updateImg("second")} />
        </Thumbnail>
        <Imgdisplay>
          <Img src={img} />
        </Imgdisplay>
      </Imgcontainer>

      <Productdetails>
        <Title>{state.title}</Title>
        <Price>${state.price}</Price>
        <Desc>{state.desc} desc</Desc>

        <Bottomcontent>
          <Counter>
            <Counterbutton onClick={()=>updateQty("minus")}>-</Counterbutton>

            <Counterdisplay>{qty}</Counterdisplay>

            <Counterbutton onClick={()=>updateQty("plus")}>+</Counterbutton>
          </Counter>

          <Addtocart onClick={()=>{updateCart(state.title, qty, itemlist); updateCartList(); console.log(itemlist)}}>Add to cart</Addtocart>
        </Bottomcontent>
      </Productdetails>

      {/* <Img src={state.img2} /> */}
    </Container>
  );
};

export default Product;
