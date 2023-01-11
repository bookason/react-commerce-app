import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 13vw;
`

const Title = styled.h5`
padding:0;
margin: 0;

`

const Subtotal = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
const P = styled.p`

`
const Subtotaldisplay = styled.div`
font-weight: bold;
`


const Cartcontent = ({item, updateCartTotal}) => {



useEffect(()=>{
    const sum = item.price * item.qty
    updateCartTotal(sum)

    console.log(sum)
},[])
  return (
    <Container>
        <Title>{item.name}</Title>
        
        <Subtotal>

        <P>${item.price} X {item.qty}</P>
        <Subtotaldisplay>
            {item.price * item.qty}
        </Subtotaldisplay>
        </Subtotal>
    </Container>
  )
}

export default Cartcontent