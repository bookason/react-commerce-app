import React from "react";
import styled from "styled-components";
import Productcard from "./Productcard";

const Container = styled.div`
  padding: 4rem;
`;
const Title = styled.h2`
  text-transform: capitalize;
`;
const Cardcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/717PQAKnDSL._AC_UY695_.jpg",
    img2: "https://m.media-amazon.com/images/I/81w6Ynbut+L._AC_UY695_.jpg",
    title: "Loafers",
    isNew: true,
    oldPrice: 19,
    price: 12,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aspernatur eaque libero voluptatum illum expedita!"
  },

  {
    id: 2,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    img2: "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Shoe",
    isNew: false,
    oldPrice: 20,
    price: 15,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, atque?"
  },

  {
    id: 3,
    img: "https://images.unsplash.com/photo-1584564515943-b54cbb61836b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img2: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    title: "Kiddies shoe",
    isNew: true,
    oldPrice: 28,
    price: 17,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi aut maiores vel dicta?"
  },
 
];

const women = [
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71dQYAjoG9L._AC_UX569_.jpg",
    img2: "https://m.media-amazon.com/images/I/81vQQJolyOL._AC_UY550_.jpg",
    title: "Womens Pajamas",
    isNew: true,
    oldPrice: 32,
    price: 28,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, neque? Nemo, ut quae."
  },

  {
    id: 5,
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img2: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Womens Heel",
    isNew: false,
    oldPrice: 43,
    price: 37,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, neque? Nemo, ut quae."
  },

  {
    id: 6,
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
    img2: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Womens Top",
    isNew: false,
    oldPrice: 55,
    price: 42,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, neque? Nemo, ut quae."
  },


]

const Featuredproducts = () => {
  return (
    <>
    <Container>
      <Title>Trending</Title>
      <Cardcontainer>
        {data.map((item) => (
          <Productcard item={item} key={item.id} />
          ))}
      </Cardcontainer>
    </Container>

    <Container>
      <Title>Women's</Title>
      <Cardcontainer>
        {women.map((item) => (
          <Productcard item={item} key={item.id} />
          ))}
      </Cardcontainer>
    </Container>
    </>
  );
};

export default Featuredproducts;
