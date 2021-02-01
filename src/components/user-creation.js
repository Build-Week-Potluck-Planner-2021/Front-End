import React, { useState } from "react";

export default function UserCreation(props){

    const { users, setUsers, userFormValues, setUserFormValues, onChange }=props;

return (
    <div>
        <form>
            <label htmlFor="name">Enter Your Name:
                <input name={userFormValues.name} type="text" placeholder="Enter Your Name" onChange={onChange} />
            </label>
        </form>
    </div>
)

}