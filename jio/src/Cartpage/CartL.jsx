import React, { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const CartL = () => {
//   const [users, setUsers] = useState([]);
//   const getProducts = async () => {
//     const res = await fetch(`https://cartdeployement.onrender.com/cart`);
//     console.log(res);
//     const data = await res.json();
//     console.log("data", data.data);

//     setUsers(data);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const [price, setPrice] = useState(0);

//   const handleRemove = (id) => {
//     const arr = users.filter((item) => item.id !== id);
//     setUsers(arr);
//     handlePrice();
//   };

//   const handlePrice = () => {
//     let ans = 0;
//     users.map((item) => (ans += +item.price));
//     setPrice(ans);
//   };

//   useEffect(() => {
//     handlePrice();
//   });
// console.log(users)
//   return (
//     <Wrapper>
//       <LeftWrapper>
//         <ItemWrapper>
//           <BasketWrapper>
//             <BasketItem>Groceries Basket</BasketItem>
//             <BasketItem>{price}</BasketItem>
//           </BasketWrapper>
//           {users.map((item) => {
//             return (
//               <div key={item.id}>
//                 <Item>
//                   <Left>
//                     <ItemImg src={item.img} />
//                   </Left>
//                   <Mid>
//                     <Title>{item.title}</Title>
//                     <Price>₹{item.price}</Price>
//                     <Seller>Sold By Reliance Retail</Seller>
//                     <Delete onClick={() => handleRemove(item.id)}>
//                       <DeleteIcon />
//                     </Delete>
//                   </Mid>
//                   <Right>
//                     <Button >-</Button>
//                     <Quantity>1</Quantity>
//                     <Button >+</Button>
//                   </Right>
//                 </Item>
//                 <hr />
//               </div>
//             );
//           })}
//         </ItemWrapper>
//       </LeftWrapper>
//       <RightWrapper>
//         <Coupan>
//           <CoupanTitle>
//             <ApplyCoupanTitle>Apply Coupan</ApplyCoupanTitle>
//             <CoupanInput type="text" placeholder="enter your coupan code" />
//           </CoupanTitle>
//           <div>
//             <View>VIEW ALL</View>
//             <Apply>APPLY</Apply>
//           </div>
//         </Coupan>

//         <FullPayment>
//           <h3>Payment details</h3>
//           <Payment>
//             <p>MRP Total</p>
//             <p>₹{price}</p>
//           </Payment>
//           <hr />
//           <Payment>
//             <p>Product discount</p>
//             <p>- ₹35.00</p>
//           </Payment>
//           <hr />
//           <Payment>
//             <h5>Total Amount</h5>
//             <p>₹{price - 35}</p>
//           </Payment>
//         </FullPayment>
//         <Payment>
//           <PlaceOrder>Place Order</PlaceOrder>
//         </Payment>
//       </RightWrapper>
//     </Wrapper>
//   );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;

const LeftWrapper = styled.div`
  flex: 2;
  flex-wrap: wrap;
  margin: 10px 10px;
  background-color: white;
  ${mobile({ padding: "10px", width: "100%" })}
`;
const RightWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
`;
const Coupan = styled.div`
  display: flex;
  background-color: white;
  height: 150px;
  justify-content: space-between;
  margin: 10px 10px;
  ${tablet({ margin: "0px 60px" })}
`;

const CoupanTitle = styled.div`
  text-align: start;
  margin-right: 50px;
`;

const ApplyCoupanTitle = styled.h3`
  ${mobile({ marginLeft: "20px" })}
`;

const CoupanInput = styled.input`
  width: 280px;
  padding: 5px;
  ${mobile({ margin: "20px" })}
`;

const View = styled.button`
  color: red;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background-color: white;
`;

const Apply = styled.button`
  margin-top: 25px;
  cursor: pointer;
  color: white;
  background-color: #008ecc;
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  ${tablet({ display: "flex" })}
`;

const FullPayment = styled.div`
  background-color: white;
  margin: 20px 10px;
  padding: 2px;
`;
const Payment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const PlaceOrder = styled.button`
  width: 250px;
  color: white;
  background-color: #008ecc;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
`;

const BasketWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BasketItem = styled.h4`
  margin: 20px 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ItemWrapper = styled.div`
  margin-left: 50px;
  width: 90%;
`;
const Item = styled.div`
  display: flex;
  width: 90%;
`;
const ItemImg = styled.img`
  padding: 50px;
`;

const Left = styled.div`
  flex: 1;
  ${mobile({ margin: "0", flexDirection: "column", width: "100%" })}
`;
const Mid = styled.div`
  flex: 1;
  margin-top: 50px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  margin-left: 100px;
  margin-top: 100px;
  ${mobile({ margin: "10px 0px", flexDirection: "column", width: "100%" })}
`;

const Button = styled.button`
  border: 1px solid transparent;
  width: 40px;
  height: 40px;
  font-size: 22px;
  border-radius: 50%;
  color: white;
  background-color: #008ecc;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const Delete = styled.button`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Quantity = styled.p`
  width: 50px;
  ${mobile({ width: "40px" })}
`;

const Title = styled.h4`
  text-align: start;
`;
const Price = styled.h4`
  text-align: start;
`;
const Seller = styled.h6`
  text-align: start;
`;

export default CartL;
