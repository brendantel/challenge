require('dotenv').config()
import mongoose from 'mongoose'
import { GraphQLServer } from 'graphql-yoga'
import Query from './server/resolvers/Query'
import models from './server/models'

// establish a connection with mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// setup a graphql-yoga server.
const server = new GraphQLServer({
    typeDefs: `${__dirname}/server/schema.graphql`,
    resolvers: { Query },
    context: {
        models
    }
})

//set the server options
const options = {
    port: process.env.PORT || 3010,
    endpoint: '/',
    playground: '/gql'
}

// start the server using the options
mongoose.connection.once("open", function () {
    server.start(options, () => console.log(`Server is running on localhost:${options.port}`))
});
