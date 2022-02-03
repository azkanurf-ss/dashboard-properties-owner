import { GraphQLClient } from 'graphql-request'
import { GRAPHQL_ENDPOINT } from '../constants/api'

const graphQLRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT)

export default graphQLRequestClient
