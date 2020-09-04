const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql');

const { root } = require('./gql/root');
const { schema } = require('./gql/schema');

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// Middlewares
app.use(bodyParser.json())
app.use(cors())


app.listen(4000, () => {
    console.log("Server has started Running on Port : 4000")
})