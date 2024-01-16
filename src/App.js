import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsItem from './components/NewsItem'
// import Desc from './components/Desc'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsItem />
      </div>
    )
  }
}