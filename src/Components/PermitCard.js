
import React, { useEffect } from "react";
import PermitForm from "./PermitForm";
import axios from "axios";
import styled from "styled-components";


export default function PermitCard( props ) {

    const { potlucks, setPotLucks } = props

    console.log(potlucks, "PL data")

    
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

    // const deletePotluckEvent = (event) => {
    //     axios
    //         .delete(`https://radiant-gorge-83314.herokuapp.com/api/potlucks`) // API HERE
    //         .then((response) => {
    //             const newPotluckList = potLucks.filter(( potluck ) => {
    //             return potluck.id !== response.data
    //         })
    //         setPotLucks(newPotluckList)
    //         })
    //         .catch((error) => {
    //             console.log( error, "There's an issue with deletePLEvent" );
    //         )}
    // };

    return(
        <div>
            {/* <NewPotluckForm/> */}
            <div>
                {potlucks.map((potluck) => {
                    return (
                        <div key={potluck.id}>
                            <h3>Event Name: {potluck.eventName}</h3>
                            <p>Location: {potluck.location }</p>
                            <p>Date: {potluck.date}</p>
                            <p>Time: {potluck.time}</p>
                        </div>    
                    )
                })}
                 <button onClick = {(event) => {
                    event.stopPropagation();
                    // deletePotluckEvent(potLucks.id)
                 }}> Delete This Potluck Event </button>
            </div>
        </div>
    )

};
