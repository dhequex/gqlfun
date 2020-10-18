 var express = require('express')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const embassyData= require('./data/minato_taishikan.json');

var schema = buildSchema(`
  
type Feature {
   type: String!
   geometry: Geometry
   properties: Embassy
}

type Geometry {
    type: String!
    coordinates: [Float]
}

type Embassy {
    name: String!
    pc: String!
    curL: String!
    phone: String!
}

type Query {
    all: [Feature]
  }
`);

var root = { 
    all: () => {
        return embassyData.features;
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(5200);
console.log('Running a GraphQL API server at localhost:5200/graphql');
