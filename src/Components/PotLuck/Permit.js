import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// IMPORT CUSTOM COMPONENTS ABOVE

const Permit = props => {
    const [ boolean, setBoolean ] = useState( false );
    const { id } = useParams();
    console.log( id );

    const addFood = ( id, food ) => {
        axios()
            .post({ foodName: food },(`${baseURL}/api/potlucks`)) // ADD API HERE 
            .then((response) => {
                console.log(response, "addFood response");
            })
            .catch((error) => {
                console.log(error, "addFood error");
            })
    };

    const assignFood = ( id, food ) => {
        axios()
            .post({ foodName:food }, (`${baseURL}/api/potlucks`)) // ADD API HERE
            .then((response) => {
                console.log(response, "assignFood response");
            })
            .catch((error) => {
                console.log(error, "assignFood error");
            })
    };
    const removeFood = ( id, food ) => {
        axios()
            .post({ foodName:food }, (`${baseURL}/api/potlucks`)) // ADD API HERE
            .then((response) => {
                console.log(response, "removeFood response");
            })
            .catch((error) => {
                console.log(error, "removeFood error");
            })
    };

    useEffect(() => {
        props.getPermit( id );
        props.getPermitFood ( id );
    }, [ ] );

    return (
        <div>
            { props.permit.location }

        </div>

    )
}