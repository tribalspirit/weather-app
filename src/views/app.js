import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './main-page'
import queryString from 'query-string'

import './app.css'


const App = () => (
<BrowserRouter basename='/'>
  <Route
    path='/'
    render={({ location: { search } }) => {
        const city = queryString.parse(search).city || ''
        return <MainPage city={city} />
    }}/> 
</BrowserRouter>)

export default App
