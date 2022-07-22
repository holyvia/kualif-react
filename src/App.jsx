import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import ChangeTheme from './pages/ChangeTheme';
import { THEME, ThemeContext, ThemeContextProvider } from './lib/Theme';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import FavoritePage from './pages/FavoritePage';

const client = new ApolloClient({
uri: 'https://countries.trevorblades.com/',
cache: new InMemoryCache(),
});
export default function App(){



return(
    <ApolloProvider client={client}>
    <ThemeContextProvider>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListPage/>}/>
          <Route exact path="/detail/:code" element={<DetailPage/>}/>
          <Route exact path="/changeTheme" element={<ChangeTheme/>}/>
          <Route exact path="/favoritePage" element={<FavoritePage/>}/>
        </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
  </ApolloProvider>
)
}