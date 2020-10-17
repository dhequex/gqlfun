 var express = require('express');

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const embassy = require('./data/minato_taishikan.json');
console.log(embassy.features)
//var data = require('./data');
//console.log(data.features)

/* 
var schema = buildSchema(`
  
type City {
    town: String
    population: Int
    quote: String
}


type Query {
    allCityData: [City]
    town: String
    population: Int
    quote: String
  }
`);

var root = { 
    
    town: ()=> {
        return "Columbus";
    },
    population: () => {
        return 195769;
    },
    quote: () => {
        return "Where there is no vision, there is no hope.";
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql'); 

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