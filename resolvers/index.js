import Apartment from './../typeDefs'

const apartments = [
    {
      id: '1',
      name: 'Cafe'
    },
    {
      id: '2',
      name: 'Restourant'
    }
  ];



const resolvers = {
    Query: {
      apartments() {
        return apartments
    },
    
  }
}

export default resolvers