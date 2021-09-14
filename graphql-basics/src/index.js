import { GraphQLServer } from 'graphql-yoga';


// String, Boolean, Int, Float, ID

//type definaton
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`

//Resolvers


const resolvers = {
    Query: {
        id(){
            return 'abc123';
        },
        name(){
            return 'Andrew'
        },
        age(){
            return 27
        },
        employed(){
            return true
        },
        gpa(){
            return null
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("Server is up!")
})