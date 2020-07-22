import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const initialState = {
  data: {
    shoppingCart: [],
  },
}
const apolloClient = new ApolloClient({
  uri: 'https://min-shop.herokuapp.com/graphql',
  cache: new InMemoryCache().restore(initialState),
})

export default withApollo(apolloClient)
