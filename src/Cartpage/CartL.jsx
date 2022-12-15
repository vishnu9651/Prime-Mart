import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const CartL = () => {
 
  return (
    <Wrapper>
      <LeftWrapper>
        <ItemWrapper>
          <BasketWrapper>
            <BasketItem>Groceries Basket (2 items)</BasketItem>
            <BasketItem>₹146.00</BasketItem>
          </BasketWrapper>
          <Item>
            <Left>
              <ItemImg src="https://www.jiomart.com/images/product/75x75/490001795/maaza-mango-drink-1-2-l-bottle-product-images-o490001795-p490001795-0-202203171010.jpg" />
            </Left>
            <Mid>
              <Title>Maaza Mango Drink 1.2 L</Title>
              <Price>₹55.00</Price>
              <Seller>Sold By Reliance Retail</Seller>
            </Mid>
            <Right>
              <Button >-</Button>
              <Quantity>1</Quantity>
              <Button >+</Button>
            </Right>
          </Item>
          <hr />
        </ItemWrapper>
      </LeftWrapper>
      <RightWrapper>
        <Coupan>
          <CoupanTitle>
            <h3>Apply Coupan</h3>
            <CoupanInput type="text" />
            <hr />
          </CoupanTitle>
          <div>
            <h4>VIEW ALL</h4>
            <button>apply</button>
          </div>
        </Coupan>

        <FullPayment>
          <h3>payment details</h3>
          <Payment>
            <p>MRP Total</p>
            <p>₹184.00</p>
          </Payment>
          <hr />
          <Payment>
            <p>Product discount</p>
            <p>- ₹35.00</p>
          </Payment>
          <hr />
          <Payment>
            <h5>Total Amount</h5>
            <p>₹149.00</p>
          </Payment>
        </FullPayment>
        <Payment>
          <PlaceOrder>Place Order</PlaceOrder>
        </Payment>
      </RightWrapper>
       </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;

const LeftWrapper = styled.div`
  flex: 2;
  margin: 10px 10px;
  background-color: white;
  ${mobile({ padding: "10px", width: "100%" })}
`;
const RightWrapper = styled.div`
  flex: 1;
`;
const Coupan = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 150px;
  margin: 10px 10px;
`;

const CoupanTitle = styled.div`
text-align: start;
margin-right: 50px;
`

const CoupanInput = styled.input`
  border: none;
 touch-action: none;
`



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
 ${mobile({ margin:"0" , flexDirection: "column", width: "100%" })}

`;
const Mid = styled.div`

flex: 1;
`;
const Right = styled.div`
flex: 1;
  display: flex;
  margin-left: 100px;
  margin-top: 100px;
  ${mobile({ margin:"10px 0px" , flexDirection: "column", width: "100%" })}
`;

const Button = styled.button`
  border: 1px solid transparent;
  width: 40px;
  height: 40px;
  font-size: 32px;
  border-radius: 50%;
  color: white;
  background-color: #008ecc;
  opacity: 0.9;
  margin-top: 10px;
`;

const Quantity = styled.p`
  width: 50px;
  ${mobile({width:"40px"})}
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
