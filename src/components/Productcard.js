import { ShoppingBag } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Img2 = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
opacity: 0;
z-index: 1;
transition: all 0.1s ease-in;
`

const Container = styled.div`
position: relative;
height: 50vh;
flex: 1;
min-width: 20%;
cursor: pointer;

&:hover{
    ${Img2}{
        opacity: 1;
    }
}
`

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Addcart = styled.span`
position: absolute;
bottom: 1rem;
right: 10px;
font-size: 20px;
color: grey;
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: #eee;
cursor: pointer;
z-index: 30;
transition: all 0.2s ease-in;

&:hover{
    transform: scale(1.08);
}
`
const Topbadge = styled.div`
position: absolute;
top: 10px;
right: 15px;
color: white;
background-color: #5cc5e2;
padding: 0;
z-index: 2;
`

const Productcard = ({item}) => {
    const data = {
        img1: item.img,
        img2: item.img2,
        title: item.title,
        price: item.price,
        desc: item.desc
    }
  return (
      <Container>
        <Link to ={`product/${item.id}`} state={data}>
        <Topbadge>{item.isNew && "New collection"}</Topbadge>
        <Img src = {item.img}/>
        <Img2 src = {item.img2}/>
        <Addcart><ShoppingBag/></Addcart>
    </Link>
    </Container>
  )
}

export default Productcard