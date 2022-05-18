import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache,
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
