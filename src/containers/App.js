import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux'
import {CardList} from '../components/card-list/card-list'
import {SearchBox} from '../components/search-box/search-box'
import ErrorBoundary from '../components/ErrorBoundary'
import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  } 

  render(){
    const {searchField, onSearchChange, robots, isPending}= this.props;
    const filteredMonsters = robots.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) 
    return isPending? 
    <h1>Loading:</h1> :
    (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='search monsters'
        handleChange = {onSearchChange}
        />
        <ErrorBoundary>
        <CardList monsters={filteredMonsters}/> 
        </ErrorBoundary>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
