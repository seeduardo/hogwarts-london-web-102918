import React, { Component } from 'react';

const imgUrlRoot = 'http://localhost:3000/hog-imgs/'

class HogTile extends Component {

  state = {
    hogInfoShown: false
  }

  showInfo = () => {
    this.setState({
      hogInfoShown: !this.state.hogInfoShown
    })
  }

  renderInfo = () => {
     return <div>
              <h3>Greased?: {
                this.props.hog.greased
                ? "You betcha!"
                : "Nah, get yer greasing gloves on...."
              }

              </h3>
              <h3>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h3>
              <h3>Specialty: {this.props.hog.specialty}</h3>
              <h3>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</h3>
            </div>
  }


  render() {
    return (
      <div onClick={this.showInfo} className="HogTile">
        <h2>{this.props.hog.name} </h2>
        {this.state.hogInfoShown
          ? this.renderInfo()
          : null
        }
        <img src={imgUrlRoot + this.props.hog.name.toLowerCase().replace(/ /g, '_') + '.jpg'} alt={this.props.hog.name}/>
      </div>
    )
  }
}

export default HogTile;
