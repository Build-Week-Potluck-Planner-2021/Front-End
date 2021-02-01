import React, { Component } from "react";
import styled from "styled-components";

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
class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = { food: "", beverage: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { food, beverage } = this.state;
    event.preventDefault();
    alert(` 
       Items You're Bringing\n 
      Food : ${food} 
      Beverage: ${beverage} 
      
    `);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <FoodListDiv>
        <H1>Food List</H1>
        <form onSubmit={this.handleSubmit}>
          <FoodLabel>
            <label htmlFor="food">
              <H2>Add Food:</H2>
            </label>
            <input
              name="food"
              placeholder="Food"
              value={this.state.food}
              onChange={this.handleChange}
            />
          </FoodLabel>
          <BeverageLabel>
            <label htmlFor="beverage">
              <H2> Add Beverage:</H2>
            </label>
            <input
              name="beverage"
              placeholder="Beverage"
              value={this.state.beverage}
              onChange={this.handleChange}
            />
          </BeverageLabel>
          <SubmitDiv>
            <Button>Submit</Button>
          </SubmitDiv>
        </form>
      </FoodListDiv>
    );
  }
}
export default FoodList;
