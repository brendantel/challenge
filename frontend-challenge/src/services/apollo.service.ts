import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

let apolloClient: any = null;

const create = (initialState: any) => {
  const isBrowser = typeof window !== 'undefined';
  const fetchClient: any = !isBrowser && fetch;

  const httpLink = createHttpLink({
    uri: process.env.apiUrl,
    credentials: 'same-origin',
    fetch: fetchClient,
  });

  const authLink = setContext((_, { headers }) => {

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R5dGVzdDAwMUBnbWFpbC5jb20iLCJpYXQiOjE1NjY2Njg4ODR9.L7EDB2KtN7h0fbjV4h9z5ZOBQU1u3ZewatvVvqhc5_A';

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

export default (initialState?: any) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};
