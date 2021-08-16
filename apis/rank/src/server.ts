import { gql, ApolloServer } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

/**
const typeDefs = gql`
  scalar DateTime
  scalar JSON

  enum Visibility {
    PUBLIC
    PRIVATE
  }

  enum Role {
    ENGINEER
    UI_UX
    PO
    OTHER
  }

  enum CompetencyKind {
    TECHNOLOGY
    FRAMEWORK
    METHODOLOGY
    SKILL
    LEADERSHIP
  }

  type Profile {
    id: ID!
    username: String
    name: JSON
    bio: String
    uris: [String]
    visibility: Visibility

    projects: [Project]
    volunteerExperiences: [VolunteerExperience]
  }

  type Project {
    id: ID!
    name: String
    description: String
    visibility: Visibility
    teammates: [Profile]
    startedAt: String
    endedAt: String
    isCurrent: Boolean

    positions: [ProjectPosition]
    competencies: [ProjectCompetency]
  }

  type ProjectPosition {
    project: Project
    profile: Profile
    title: String
    description: String
    visibility: Visibility
  }

  type Competency {
    id: ID!
    kinds: [CompetencyKind]
    name: String!
    description: String
    related: [ID]
  }

  type ProjectCompetency {
    project: Project
    profile: Profile
    competencies: [Competency]
  }



  type VolunteerExperience {
    profile: Profile
    title: String
    description: String
    cause: String
    startedAt: String
    endedAt: String
    visibility: Visibility
    roles: [String]
  }


  

  type Query {
    me: Profile
    ping: String
  }
`

 */

const typeDefs = gql`
  scalar JSON
  scalar Date
  scalar DateTime
  scalar Time

  enum Visibility {
    PUBLIC
    PRIVATE
  }

  type Account {
    id: ID!
    username: String
    token: String

    uris: [Uri!]!
    feedback: [Feedback!]!
  }

  type Category {
    id: ID!
    name: String!
    description: String
    visibility: Visibility
    isActive: Boolean
  }


  type Uri {
    id: ID!
    category: Category!
    title: String!
    description: String
    uri: String!
    related: [ID]
    visibility: Visibility
    isActive: Boolean

    account: Account
    feedback: [Feedback!]!
    results: Results
  }

  type Feedback {
    id: ID!
    rating: Int
    comment: String
    visibility: Visibility
    isActive: Boolean
    account: Account!
    uri: Uri!
    qualityOfRating: Int
    createdBy: Account
    createdAt: String
  }

  type Results {
    total: Int!
    stars: JSON
    min: Int
    max: Int
    average: Float
  }


  type Query {
    me: Account
    ping: String
  }

`

const resolvers = {
  // DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Time: GraphQLTime,
  Query: {
    me: () => ({}),
    ping: () => `pong`,
  },
}

export const server = new ApolloServer({
  debug: true,
  introspection: true,
  mockEntireSchema: true,
  resolvers,
  typeDefs,
})
