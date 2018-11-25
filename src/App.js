import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import ListGear from './ListGear';
import CreateGearItem from './CreateGearItem';
import * as GearListAPI from './utils/GearListAPI';


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

    GearListAPI.remove(gearItem)    
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={ () => (
          <ListGear 
          gearList={this.state.gearList}
          onRemoveItem = {this.removeItem}
          />
        )}/>
        <Route path='/create' component={CreateGearItem}/>
      </div>
    )
  }
}

export default App;