export const schema = gql`
  type Result {
    id: Int!
    season: String!
    week_number: Int!
    playerid: Int!
    game_one: Int!
    game_two: Int!
    game_three: Int!
    bye: Int!
    deleted: Int!
    createdAt: DateTime!
  }

  type Query {
    results: [Result!]! @skipAuth
    result(id: Int!): Result @requireAuth
  }

  input CreateResultInput {
    season: String!
    week_number: Int!
    playerid: Int!
    game_one: Int!
    game_two: Int!
    game_three: Int!
    bye: Int!
    deleted: Int!
  }

  input UpdateResultInput {
    season: String
    week_number: Int
    playerid: Int
    game_one: Int
    game_two: Int
    game_three: Int
    bye: Int
    deleted: Int
  }

  type Mutation {
    createResult(input: CreateResultInput!): Result! @requireAuth
    updateResult(id: Int!, input: UpdateResultInput!): Result! @requireAuth
    deleteResult(id: Int!): Result! @requireAuth
  }
`
