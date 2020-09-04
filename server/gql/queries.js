const { USERS } = require("./data")

let users = [...USERS]
const getUsers = () => {
    return users
}

const getUser = id => {
    return users.filter(user => user.id === id)[0] || null
}

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
    getUsers,
    getUser,
    addUser
}