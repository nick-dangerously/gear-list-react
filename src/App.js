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

  createGearItem(gearItem) {
    GearListAPI.create(gearItem).then(gearItem => {
      this.setState(state => ({
        gearList: state.gearList.concat( [gearItem] )
      }))
    })
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
        <Route path='/create' render={({ history }) => (
          <CreateGearItem
            onCreateGearItem={(gearItem) => {
              this.createGearItem(gearItem)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default App;