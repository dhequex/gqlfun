 var express = require('express')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const embassyData= require('./data/minato_taishikan.json');
console.log(embassyData)


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
        ///et info = arrayOfEmbassies.map(data => data.properties);
        return embassyData.features;
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(5000);
console.log('Running a GraphQL API server at localhost:5000/graphql');


/*
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql'); */