import React, { useState } from 'react';

export const UserForm = ({formSubmit}) => {
    const [user, setUser ] = useState({ name: "", email: "", role: ""});

    const inputchangeHandler = e => {
        let updatedUser = {...user}
        updatedUser[e.target.name] = e.target.value
        setUser({
            ...updatedUser,

        })
    }
    const formSubmitHandler = (e)=> {
        e.preventDefault()
        formSubmit({...user})
    }
    
    return (
        <div className="form-div">
            <form>
                <label for="name">Name</label>
                <input onChange={(e) => inputchangeHandler(e)} value={user.name} type="text" id="name" name="name" placeholder="Your name.." />

                <label for="email">Email</label>
                <input onChange={(e) => inputchangeHandler(e)} value={user.email} type="text" id="email" name="email" placeholder="Your Email.." />

                <label for="role">Role</label>
                <select onChange={(e) => inputchangeHandler(e)} value={user.role} id="role" name="role">
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>

                <input onClick={formSubmitHandler} type="submit" value="Submit" />
            </form>
        </div>
    );
}