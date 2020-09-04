const { USERS } = require("./data")

let users = [...USERS]

const addUser = (name, email, role) => {
    console.log("addUser triggered")
    let id = Math.floor(Math.random() * 100); 
    let newUser = {
        id,
        name, 
        email, 
        role
    }
    users.push(newUser)
    return newUser
}
module.exports = {
    addUser
}