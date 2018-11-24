import React, { Component } from 'react';
import ListGear from './ListGear'
import * as GearListAPI from './utils/GearListAPI'

class App extends Component {
  state = {
    gearList: []
  }

  componentDidMount() {
    GearListAPI.getAll().then((gearList) => {
      this.setState({ gearList: gearList })
    })
  }

  removeItem = (gearItem) => {
    this.setState((state) => ({
      gearList: state.gearList.filter((item) => item.id !== gearItem.id)
    }))

  }

  render() {
    return (
      <div>
        <ListGear 
          onRemoveItem = {this.removeItem} 
          gearList={this.state.gearList}
        />  
      </div>
    )
  }
}

export default App;