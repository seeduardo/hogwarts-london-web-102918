import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

class App extends Component {

  state = {
    allHogs: hogs
  }

  sortHogsByName = () => {
    this.setState({
      allHogs: this.state.allHogs.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }

  sortHogsByWeight = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.setState({
      allHogs: this.state.allHogs.sort((a, b) => (a[`${weight}`] > b[`${weight}`]) ? 1 : ((b[`${weight}`] > a[`${weight}`]) ? -1 : 0))
    })
  }

  filterGreased = () => {
    return (this.setState({
      allHogs: this.state.allHogs.filter(
        hog => hog.greased
      )
    }))
  }

  render() {
    return (
      <div className="App">
          < Nav
              sortHogsByName={this.sortHogsByName}
              sortHogsByWeight={this.sortHogsByWeight}
              filterGreased={this.filterGreased}
              />
          < HogList hogs={this.state.allHogs} />
      </div>
    )
  }
}

export default App;
