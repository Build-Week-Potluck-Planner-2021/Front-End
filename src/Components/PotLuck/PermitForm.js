import React from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";

const PermitForm = props => {
    const { id } = useParams();
    const initialPermit = {
        potluckName: "",
        userID: "",
        location: "",
        date: "",
        time: "",
    };


    const [ addPermit, setAddPermit ] = useState( initialPermit );

    const handleChangePL = permit => { // handle change retitle
        setAddPermit({
            ...addPermit,
            [ permit.target.name ]: permit.target.value,
        });
    };

    const handleSubmit = permit => {
        permit.preventDefault();
        axios()
            .post(addPermit, `${baseURL}/api/potlucks`) // ADD THE API HERE! 
            .then((response) => {
                console.log(response, "permitPostRes")
            })
            .catch((error) => {
                console.log(error, "Error from PermitForm");
            })
        setAddPermit( initialPermit );
    }
// RETURNING PROPS INFO
    return (
        <div className = "permit-form">
            <Form OnSubmit = { handleSubmit }>
                <Label>Permit Name</Label>
                <Input
                    name = "potluckName"
                    type = "text"
                    placeholder = "name"
                    value = { addPermit.potluckName }
                    onChange = { handleChangePL }
                />
                <Label>Location</Label>
                <Input
                    name = "location"
                    type = "text"
                    placeholder = "location"
                    value = { addPermit.location }
                    onChange = { handleChangePL }
                />
                <Label>Date</Label>
                <Input
                    name = "date"
                    type = "date"
                    placeholder = "date"
                    value = { addPermit.date }
                    onChange = { handleChangePL }
                />
                <Label>Time</Label>
                <Input
                    name = "time"
                    type = "time"
                    placeholder = "time"
                    value = { addPermit.time }
                    onChange = { handleChangePL }
                />
                <Button type = "Submit">Submit</Button>
            </Form>
        </div>
    )
};
export default PermitForm;