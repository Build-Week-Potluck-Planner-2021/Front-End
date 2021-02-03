
import React, { useState, useEffect }from "react";
import PermitForm from "./PermitForm";
import axios from "axios";
import styled from "styled-components";


export default function PermitCard( props ) {

 const [potLucks, setPotLucks] = useState([])
    console.log(potLucks, "PL data")

    
    useEffect(() => {
        axios()
            .get('/api/user/id')
            .then((response) => {
                setPotLucks( response.data );
                console.log(response, "then response is here")
            })
            .catch((error) => {
                console.log( error, "catch response is here");
        });
    }, []);

    const deletePotluckEvent = color => {
        axiosWithAuth()
        .delete(`/api/user/${potLucks.id}`)
        .then(res => {
          const newPotluckList = potLucks.filter((potluck) => {
             return potluck.id !== res.data
          })
          setPotLucks(newPotluckList)
        })
        .catch((error) => console.log(err))
    };

    return(
        <div>
            {/* <NewPotluckInfoForm/> */}
            <div>
                {potLucks.map((potLuck) => {
                    return (
                        <div key={potLuck.id}>
                            <h3>Event Name: {potLuck.eventName}</h3>
                            <p>Location: {potLuck.location }</p>
                            <p>Date: {potLuck.date}</p>
                            <p>Time: {potLuck.time}</p>
                        </div>    
                    )
                })}
                 <button onClick = {e => {
                    e.stopPropagation();
                    deletePotluckEvent(potLucks.id)
                 }}> Delete Potluck Event </button>
            </div>
        </div>
    )




}