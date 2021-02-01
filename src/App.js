import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import PokemonContainer from './containers/PokemonContainer';


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  })
  
  return (
    <ApolloProvider client={client}>
        <div>
          <PokemonContainer />
        </div>
    </ApolloProvider>
  );
}

export default App;
