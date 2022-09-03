import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfields: '',
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => this.setState({ robots: result }))
  }
  render() {
    const { robots, searchfields } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfields.toLowerCase())
    })
    // if (robots.length === 0) {
    //   return <h1>Loading ... </h1>
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">Robotfriend</h1>
    //       <SearchBox onSearchChange={this.onSearchChange} />
    //       <Scroll>
    //         <CardList robots={filteredRobots} />
    //       </Scroll>
    //     </div>
    //   )
    // }

    return !robots.length ? (
      <h1>Loading ... </h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robotfriend</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}
export default App
