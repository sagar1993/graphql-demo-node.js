import express from 'express';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser'; 
import schema from './schema';
import mongoose from 'mongoose';


const server = express();

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql",
}));

mongoose.connect('mongodb://localhost/gql');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("connected");
});

server.use("/graphql", bodyParser.json(), graphqlExpress({schema}));

server.listen(5000 ,() => {
    console.log("started");
})