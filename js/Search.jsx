import React, { Component } from 'react'
import data from '../public/data'
import ShowCard from './ShowCard'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: ''}
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange (event) {
    this.setState({ searchTerm: event.target.value })
  }
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} onChange={this.onInputChange} className='search-input' type='text' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows
            .filter((show) => `${show.title} ${show.description}`
            .toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

module.exports = Search
