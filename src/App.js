import './App.css';
import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";


function App() {


const initialUsers=[];
const initialFoodItems=[];
const initialPotlucks=[];

const [userFormValues, setUserFormValues]=useState({
  name: "",
  favoriteFood: "",
  foodItems: "",
  potlucks: "",
});

const [users, setUsers]=useState(initialUsers);

const [foodItems, setFoodItems]=useState(initialFoodItems);

const [potlucks, setPotlucks]=useState(initialPotlucks);



  return (
    <div>
      <HomepageDiv>
      <h1>Potluck Planner</h1>
      <h4>Create, Connect, and Taste </h4>
      </HomepageDiv>
    </div>
  );
}

const HomepageDiv=styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.8rem;
h1 {
  color: #ffcc29;
}
h4 {
  font-size: 1.5rem;
  position: relative;
  bottom: 4rem;
  color: #ffcc29;
  border-bottom: .75rem ridge #ffcc29;
  border-radius: 1rem;
}
`

export default App;
