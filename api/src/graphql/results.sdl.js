export const schema = gql`
  type Result {
    id: Int!
    season: String!
    week_number: Int!
    player: Player!
    game_one: Int!
    game_two: Int!
    game_three: Int!
    bye: Int!
    deleted: Int!
    createdAt: DateTime!
    playerId: Int!
  }

  type Query {
    results: [Result!]! @requireAuth
    result(id: Int!): Result @requireAuth
  }

  input CreateResultInput {
    season: String!
    week_number: Int!
    game_one: Int!
    game_two: Int!
    game_three: Int!
    bye: Int!
    deleted: Int!
    playerId: Int!
  }

  input UpdateResultInput {
    season: String
    week_number: Int
    game_one: Int
    game_two: Int
    game_three: Int
    bye: Int
    deleted: Int
    playerId: Int
  }

  type Mutation {
    createResult(input: CreateResultInput!): Result! @requireAuth
    updateResult(id: Int!, input: UpdateResultInput!): Result! @requireAuth
    deleteResult(id: Int!): Result! @requireAuth
  }
`
