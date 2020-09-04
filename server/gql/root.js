const { getUsers, getUser, addUser } = require("./queries");
// const { addUser } = require("./mutations");


const root = {
    hello: () => {
        return 'Hello world!';
    },
    users: () => {
        return getUsers()
    },
    user: (args) => {
        return getUser(args.id)
    },
    newUser: (args) => {
        return addUser(args.name, args.email, args.role)
    }
};

module.exports =  {
    root
}