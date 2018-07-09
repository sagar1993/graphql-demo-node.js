# graphql-demo-node.js


A demo using node.js, graphiql, graphql-tools to perform simple database operations.


Vs rest  
more dynamic, less url
Rest has more urls which cause network traffic, url for every resource.


Babel watch 
Node js doesn’t supports es6 - babel used as compiler

Node.js watch for changes in server
Nom install —save babel-watch
"build": "babel-watch server.js"


Graphiql
To send mock requests to express

bodyParser 
To parse content before sending to graphql

Graphql-tools
To provide schema to graphql
Fake data store: addmockFunctionsToSchema


Node-uuid 
To generate unique id’s
