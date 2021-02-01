import React, { useState } from "react";
import styled from "styled-components";

export default function UserCreation(props){

    const { users, setUsers, userFormValues, setUserFormValues, onChange, disabled, setDisabled }=props;

return (
    <div>
        <UserForm>
            <UserFormTitle>Create A Basic Guest/Organizer Profile</UserFormTitle>
            <label htmlFor="name">Enter Your Name:
                <input name="name" value={userFormValues.name} type="text" placeholder="Enter Your Name" onChange={onChange} />
            </label>

            <label htmlFor="favoriteFood">Favorite Food:
                <input name="favoriteFood" value={userFormValues.favoriteFood} type="text" placeholder="Enter Your Favorite Food" onChange={onChange} /> 
            </label>

            <button disabled={disabled}>Submit</button>
        </UserForm>
    </div>
)

}

const UserForm=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 5rem;
    color: #ffcc29;

    select, input {
        margin: 1rem;
        border: 1rem ridge #ffcc29;
        border-radius: 1rem;
    };
    label {
        margin: 1rem;
        font-weight: bold;
    }
`
const UserFormTitle=styled.h4`
position: relative;
top: 3rem;
`