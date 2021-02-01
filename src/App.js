import "./App.css";
import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import FoodList from "./FoodList";

function App() {
  return (
    <div>
      <h1>Potluck Planner</h1>
      <FoodList />
    </div>
  );
}

export default App;
