
import React, { useEffect, setState } from "react";
import axios from "axios";
import styled from "styled-components";


export default function PermitCard( props ) {

    const { potlucks, setPotLucks } = props;

    console.log(potlucks, "PL data")

    // ONCE THE API IS FUNCTIONAL UNTABB
    // useEffect(() => {
    //     axios
    //         .post("https://radiant-gorge-83314.herokuapp.com/api/potlucks")
    //         .then((response) => {
    //             setPotLucks( response.data );
    //             console.log(response, "then response is here")
    //         })
    //         .catch((error) => {
    //             console.log( error, "catch response is here");
    //     });
    // }, []);

    // const deletePotluckEvent = (PLdata) => {
    //     axios
    //         .delete(`https://radiant-gorge-83314.herokuapp.com/api/potlucks/${PLdata}`)
    //     // API HERE
    //         .then((response) => {
    //             const newPotluckList = potLucks.filter(( potluck ) => {
    //             return potluck.id !== response.data
    //             setPotLucks(newPotluckList)
    //         })
    //         setPotLucks(newPotluckList)

    //         .catch((error) => {
    //             console.log( error, "There's an issue with deletePLEvent" );
    //         )}
    // };

    // triggerDelete(permit, index){
    //     if(window.confirm("Are you sure you want to delete this task?")){
    //        let taskList = [...this.state.taskList]
    //        taskList.splice(index, 1);
    //        this.setState({taskList: taskList})
    //     }
    //  }

    return(
        <FormData className = "form-container">
            {/* <NewPotluckForm/> */}
            <Form className = "form-info">
                {potlucks.map((potluck) => {
                    return (
                        <div key={potluck.id}>
                            <h3>Potluck Event: {potluck.potluckName}</h3>
                            <p>Location: {potluck.location }</p>
                            <p>Date: {potluck.date}</p>
                            <p>Time: {potluck.time}</p>
                        </div>    
                    )
                })}
                 {/* <button onClick = {(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    this.triggerDelete(permit);
                    // deletePotluckEvent(potLucks.id)
                 }}> Delete This Potluck Event </button> */}
            </Form>                

        </FormData>
    )

};


// styled Components
const FormData = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`
const Form = styled.div`
display: flex;
width: 50%;
flex-wrap: wrap;
align-content: center;
border: 1px solid black;


`