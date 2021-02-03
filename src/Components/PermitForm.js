import React, { useState } from "react";
import axios  from "axios";
import PermitCard from "./PermitCard";
import styled from "styled-components";


const initialplFormValues = {
    potluckName: "",
    users: "",
    location: "",
    date: "",
    time: "",
};

const initialPotlucks = [];


export default function PermitForm () {
    const [ potlucks, setPotlucks ] = useState( initialPotlucks );
    const [ plFormValues, setplFormValues ] = useState( initialplFormValues );

    const handleChangePL = event => { // handle change retitle
        setplFormValues({
            ...plFormValues,
            [ event.target.name ]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newpotLuck = { 
            potluckName: plFormValues.potluckName,
            users: plFormValues.users,
            location: plFormValues.location,
            date: plFormValues.date,
            time: plFormValues.time,
        }
    //     axios
    //         .post("https://radiant-gorge-83314.herokuapp.com//api/potlucks",newpotLuck ) // ADD THE API HERE! 
    //         .then((response) => {
    //             console.log(response.data, "permitPostRes")
    //             setPotlucks( [...potlucks, response.data] )
    //         })
    //         .catch((error) => {
    //             console.log(error, "Error from PermitForm");
    //         })
        // setplFormValues( initialplFormValues );
    setPotlucks( [...potlucks, newpotLuck] );
    setplFormValues( initialplFormValues );
}
// RETURNING PROPS INFO
    return (
        <FormContainer>
            <form onSubmit = { handleSubmit }>
                <label>Permit Name</label>
                <Input
                    name = "potluckName"
                    type = "text"
                    placeholder = "name"
                    value = { potlucks.potluckName }
                    onChange = { handleChangePL }
                />
                <label>Location</label>
                <Input
                    name = "location"
                    type = "text"
                    placeholder = "location"
                    value = { potlucks.location }
                    onChange = { handleChangePL }
                />
                <label>Date</label>
                <Input
                    name = "date"
                    type = "date"
                    placeholder = "date"
                    value = { potlucks.date }
                    onChange = { handleChangePL }
                />
                <label>Time</label>
                <Input
                    name = "time"
                    type = "time"
                    placeholder = "time"
                    value = { potlucks.time }
                    onChange = { handleChangePL }
                />
                <Button type = "Submit">Submit</Button>
            </form>
            <PermitCard
                potlucks = { potlucks }
                setPotlucks = { setPotlucks } 
            />
 
        </FormContainer>
    )
};




// STYLED CSS
const FormContainer = styled.div`
border: 1px solid black;
    margin: 0 5rem;
    width: auto;
    display: flex; 
`
const Input = styled.input`
    margin: 1rem;
`
const Button = styled.button`
    margin: 1rem;
`

