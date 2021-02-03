import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import FoodList from "./Components/FoodList";
import UserCreation from "./Components/user-creation";
import Permit from "./Components/Permit";

function App() {
  //initial slices of data
  const initialUsers = [];
  const initialFoodItems = "";
  const initialBeverageItems = "";
  const initialPotlucks = [];
  const initialDisabled = true;

  const initialFormValues = {
    name: "",
    favoriteFood: "",
    foodList: "",
    potlucks: "",
  };
  const initialErrors = {
    name: "",
    favoriteFood: "",
    foodList: "",
    potlucks: "",
  };

  //slices of state
  const [userFormValues, setUserFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);

  const [foodItems, setFoodItems] = useState(initialFoodItems);
  const [beverageItems, setBeverageItems] = useState(initialBeverageItems);
  const [potlucks, setPotlucks] = useState(initialPotlucks);

  //event handlers

  const onChangeUserForm = function (event) {
    const { name, value, type, checked } = event.target;

    const valueToUse = type === "checkbox" ? checked : value;

    setUserFormValues({ ...userFormValues, [name]: valueToUse });
  };

  const onSubmitUserForm = function (event) {
    event.preventDefault();
    const { name, value, type, checked } = event.target;

    const newUser = {
      name: userFormValues.name,
      favoriteFood: userFormValues.favoriteFood,
      foodList: userFormValues.foodList,
      potlucks: userFormValues.potlucks,
    };
    setUsers([...users, newUser]);
    setUserFormValues(initialFormValues);
  };

  return (
    <div>
      <HomepageDiv>
        <h1>Potluck Planner</h1>
        <h4>Create, Connect, and Taste </h4>
        <HeadingNav>
          <Link to="/">Home</Link>
          <Link to="/Potluck">Create A Potluck</Link>
          <Link to="/FoodList">Create A Food List</Link>
        </HeadingNav>
        <Route exact path="/">
          <UserCreation
            users={users}
            setUsers={setUsers}
            userFormValues={userFormValues}
            setUserFormValues={setUserFormValues}
            onChangeUserForm={onChangeUserForm}
            disabled={disabled}
            setDisabled={setDisabled}
            onSubmitUserForm={onSubmitUserForm}
          />
        </Route>

        <Route exact path="/Potluck">
          <Permit />
        </Route>

        <Route exact path="/FoodList">
          <FoodList
            foodItems={foodItems}
            beverageItems={beverageItems}
            setFoodItems={setFoodItems}
            setBeverageItems={setBeverageItems}
          />
        </Route>
      </HomepageDiv>
    </div>
  );
}

//Styled Components
const HomepageDiv = styled.div`
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
    border-bottom: 0.75rem ridge #ffcc29;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;
const HeadingNav = styled.ul`
  display: flex;
  justify-content: center;
  link,
  a {
    margin: 1rem;
    text-decoration: none;
    color: #ffcc29;
    position: relative;
    bottom: 7rem;
    font-weight: bold;
  }
`;

export default App;
