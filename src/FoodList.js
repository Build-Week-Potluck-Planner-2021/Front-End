import React, { useState } from "react";
import styled from "styled-components";

function FoodList(props) {
  const [beverage, setBeverage] = useState("");
  const [food, setFood] = useState("");

  const logName = () => {
    console.log(beverage);
    console.log(food);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(` Items You're Bringing : ${food} / ${beverage}`);
  };

  const handleBeverageInput = (e) => {
    setBeverage(e.target.value);
  };
  const handleFoodInput = (e) => {
    setFood(e.target.value);
  };

  return (
    <FoodListDiv>
      <H1>Food List</H1>
      <form onSubmit={handleSubmit}>
        <FoodLabel>
          <label htmlFor="food">
            <H2>Add Food:</H2>
          </label>
          <input
            name="food"
            placeholder="Food"
            value={food}
            onChange={handleFoodInput}
          />
        </FoodLabel>
        <BeverageLabel>
          <label htmlFor="beverage">
            <H2> Add Beverage:</H2>
          </label>
          <input
            name="beverage"
            placeholder="Beverage"
            value={beverage}
            onChange={handleBeverageInput}
          />
        </BeverageLabel>
        <SubmitDiv>
          <Button onClick={logName}>Submit</Button>
        </SubmitDiv>
      </form>
    </FoodListDiv>
  );
}
// Styled Components
const FoodListDiv = styled.div`
  background-color: #00af91;
  padding: 7px 70px;
  justify-cont
`;

const FoodLabel = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 1.3 rem;
`;

const BeverageLabel = styled.div`
  text-align: center;
  margin 10px auto;
  font-size: 1.3 rem;
  
`;
const SubmitDiv = styled.div`
text-align: center;
margin 10px auto;
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3 rem;
  padding: 7px 70px;
  margin-top: 10px;
  background: #F58634;
  border-radius: 5px ;
  color: #FFF;
  &: hover {
    color: #ffcc29;
`;

const H1 = styled.h1`
  color: #ffcc29;
  text-align: center;
`;

const H2 = styled.h2`
  color: #ffcc29;
`;

export default FoodList;
