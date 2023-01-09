export const schema = gql`
  type Player {
    id: Int!
    first_name: String!
    last_name: String!
    deleted: Int!
    createdAt: DateTime!
  }

  type Query {
    players: [Player!]! @skipAuth
    player(id: Int!): Player @requireAuth
  }

  input CreatePlayerInput {
    first_name: String!
    last_name: String!
    deleted: Int!
  }

  input UpdatePlayerInput {
    first_name: String
    last_name: String
    deleted: Int
  }

  type Mutation {
    createPlayer(input: CreatePlayerInput!): Player! @requireAuth
    updatePlayer(id: Int!, input: UpdatePlayerInput!): Player! @requireAuth
    deletePlayer(id: Int!): Player! @requireAuth
  }
`
