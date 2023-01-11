import { Create, Email, LocationCity, LocationOn, Phone } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 3rem;

`

const Title = styled.h1`

`

const Content = styled.div`
display: flex;
gap: 15px;
font-size: 1.2rem;
margin-bottom: 2rem;
`
const Text = styled.div`
flex: 14;
`

const Icon = styled.div`
flex: 1;
text-align: right;
`
const Input = styled.input`
width: 75%;
padding: 1rem;
background-color: #eee;
border: none;
border-radius: 2rem;
margin-bottom: 1.5rem;

height: ${props => props.type ==="textarea" ? "20vh" : ""};
`
const Btn = styled.button`
padding: 1rem;
border-radius: 1.5rem;
width: 35%;
border: none;
color: #fff;
background: teal;
cursor: pointer;
transition: all 0.2s ease-in;

&:hover{
  transform: scale(1.03);
}
`


const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Content>
        <Icon><LocationOn/></Icon>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia sapiente incidunt veritatis vitae ullam.</Text>
      </Content>

      <Content>
        <Icon><Phone/></Icon>
        <Text>+1-345-567-800</Text>
      </Content>

      <Content>
        <Icon><Email/></Icon>
        <Text>info@email.com</Text>
      </Content>

      <Content>
        <Icon></Icon>
        <Text>
          <Input placeholder='full name...'/>
          <Input placeholder='email....'/>
          <Input placeholder='location...'/>
          <Input type = "textarea"/>
        </Text>
      </Content>

      <Content>
        <Icon></Icon>
        <Text>

        <Btn>Submit</Btn>
        </Text>
      </Content>
     
    </Container>
  )
}

export default Contact