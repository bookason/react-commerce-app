import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Slidercontainer = styled.div`
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
`;
const Imgcontainer = styled.div`
  display: flex;
  width: 300vw;
  height: 100%;
  position: relative;
  transform: translateX(${(props)=> props.currentindex * -100}vw);
  transition: all 0.3s ease-in;
`;

const Img = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
const Iconcontainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  bottom: 10vh;
  display: flex;
  gap: 5px;
`;
const Arrow = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 50%;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  left: ${(props) => props.align === "left" && "10px"};
  right: ${(props) => props.align === "right" && "10px"};
  cursor: pointer;
`;

const data = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
];



const Slider = () => {
    const [currentindex, setCurrenIndex] = useState(0);

    const updateSlide =(direction)=>{

        if (direction ==="left"){
            setCurrenIndex(
                currentindex ===0 ? 2 : (prev) =>prev -1
            )
        } 

        if (direction ==="right"){
            setCurrenIndex(
                currentindex ===2 ? 0 : (prev) =>prev + 1
            )
        }

    }

  return (
    <Slidercontainer>
      <Imgcontainer currentindex = {currentindex}>
        <Img src={data[0]} />
        <Img src={data[1]} />
        <Img src={data[2]} />
      </Imgcontainer>

      <Iconcontainer>
      <Arrow onClick={()=>(updateSlide("left"))}>
          <WestOutlined />
        </Arrow>
        <Arrow onClick={()=>{updateSlide("right")}}>
          <EastOutlined />
        </Arrow>
        
      </Iconcontainer>
    </Slidercontainer>
  );
};

export default Slider;
