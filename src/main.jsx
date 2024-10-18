import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client"

import ScrollToTop from './part/ScrollToTop.jsx'
import { HashRouter,BrowserRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'




const client = new ApolloClient({
  uri:"https://api-ap-northeast-1.hygraph.com/v2/clgunwajb07n901ulcp9p6cf9/master",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ApolloProvider client={client}>
  <React.StrictMode>
  <HashRouter >
  <ScrollToTop/>
    <App />
    </HashRouter>
  </React.StrictMode>
  </ApolloProvider>
)
