import React, { useState } from "react";
import styled from "styled-components";

export default function UserCreation(props){

    const { users, setUsers, userFormValues, setUserFormValues, onChangeUserForm, onSubmitUserForm, disabled, setDisabled }=props;

return (
    <div>
        <UserForm onSubmit={onSubmitUserForm}>
            <UserFormTitle>Create A Guest/Organizer Profile</UserFormTitle>
            <label htmlFor="name">Enter Your Name:
                <input name="name" value={userFormValues.name} type="text" placeholder="Enter Your Name" onChange={onChangeUserForm} />
            </label>

            <label htmlFor="favoriteFood">Favorite Food:
                <input name="favoriteFood" value={userFormValues.favoriteFood} type="text" placeholder="Enter Your Favorite Food" onChange={onChangeUserForm} /> 
            </label>

            <button >Submit</button>
            {users.map(function(user){
                return <p>Name: {user.name}, Favorite Food: {user.favoriteFood}</p>
            })}
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
    p {
        font-weight: bold;
    }
`
const UserFormTitle=styled.h4`
position: relative;
top: 3rem;
`