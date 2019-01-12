import React, { Component } from 'react';
import HogTile from './HogTile'

class Hoglist extends Component {

  handleHogData = (hog) => {

  }

  render() {
    return (
      <div className="Hoglist">
          {this.props.hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
      </div>
    )
  }
}

export default Hoglist;
