
import { InMemoryCache } from 'apollo-boost'
import { makeVar } from '@apollo/client';

export const shoppingCartVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        shoppingCart: {
          read() {
            return shoppingCartVar();
          }
        }
      }
    }
  }
});