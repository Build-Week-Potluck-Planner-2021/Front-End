import React from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";

const PermitForm ( props ) => {

    const initialPermit = {
        potluckName: "",
        userID: "",
        location: "",
        date: "",
        time: "",
    };
};

export default function PermitForm () {
    const [ potlucks, setPotlucks ] = useState( initialPotlucks );

    const handleChangePL = event => { // handle change retitle
        setAddPermit({
            ...potlucks,
            [ event.target.name ]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios()
            .post(potlucks, `https://radiant-gorge-83314.herokuapp.com//api/potlucks`) // ADD THE API HERE! 
            .then((response) => {
                console.log(response, "permitPostRes")
            })
            .catch((error) => {
                console.log(error, "Error from PermitForm");
            })
        setPotlucks( InitialPotlucks );
    }
// RETURNING PROPS INFO
    return (
        <FormContainer>
            <Form OnSubmit = { handleSubmit }>
                <Label>Permit Name</Label>
                <Input
                    name = "potluckName"
                    type = "text"
                    placeholder = "name"
                    value = { potlucks.potluckName }
                    onChange = { handleChangePL }
                />
                <Label>Location</Label>
                <Input
                    name = "location"
                    type = "text"
                    placeholder = "location"
                    value = { potlucks.location }
                    onChange = { handleChangePL }
                />
                <Label>Date</Label>
                <Input
                    name = "date"
                    type = "date"
                    placeholder = "date"
                    value = { potlucks.date }
                    onChange = { handleChangePL }
                />
                <Label>Time</Label>
                <Input
                    name = "time"
                    type = "time"
                    placeholder = "time"
                    value = { potlucks.time }
                    onChange = { handleChangePL }
                />
                <Button type = "Submit">Submit</Button>
            </Form>
        </FormContainer>
    )
};

// STYLED CSS
const FormContainer = styled.div`
border: 1px solid gray;
    margin: 0 5rem;
    width: auto;
    display: flex; 
`
const Input = styled.div`
margin: 1rem;
`
const Button = styled.button`
margin: 1rem;
`

