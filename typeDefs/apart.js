const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Apartment {
    id: ID,
    name: String,
    description: String,
    price: String,
    rooms: Int
  },

  type Query {
    apartments: [Apartment]
  },

`
export default typeDefs
