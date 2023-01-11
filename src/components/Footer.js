import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #eee;
  padding: 2rem;
  display: flex;
  gap: 1rem;
`;

const Socialiconcontainer = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const About = styled.div`
  flex: 1;
`;

const Category = styled.div`
  flex: 1;
`;

const Newsletter = styled.div`
  flex: 1;
`;

const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;

  > li {
    margin-bottom: 1rem;
    cursor: pointer;
  }
`

const Form = styled.div`
display: flex;
gap: 10px;
`

const Input = styled.input`
width: 50%;
padding: 0.6rem;
background-color: whitesmoke;
color: grey;
border-radius: 2rem;
border: none;
`

const Signup = styled.button`
padding: 0.6rem;
border-radius: 2rem;
background-color: teal;
border: none;
color: white;
cursor: pointer;
`

const Footer = () => {
  return (
    <Wrapper>
      <Socialiconcontainer>
        <Icon>
          <Facebook />
        </Icon>
        <Icon>
          <Twitter />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <YouTube />
        </Icon>
      </Socialiconcontainer>

      <About>
        <h3>About</h3>
        <Ul>
          <li>Home</li>
          <li>About</li>
          <li>Return policy</li>
          <li>Contact</li>
        </Ul>
      </About>

      <Category>
        <h3>Category</h3>
        <Ul>
          <li>Shoes</li>
          <li>Jackets</li>
          <li>Kids</li>
        </Ul>
      </Category>

      <Newsletter>
        <h3>Newsletter</h3>
        <Form>
          <Input placeholder="email..."/>
          <Signup>Sign up</Signup>
        </Form>
      </Newsletter>
    </Wrapper>
  );
};

export default Footer;
