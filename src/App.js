import React, { Component } from 'react';
import ListGear from './ListGear'
import CreateGearItem from './CreateGearItem'
import * as GearListAPI from './utils/GearListAPI'

class App extends Component {
  state = {
    screen: 'list', // list,create
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
        {this.state.screen === 'list' && (
         <ListGear 
         gearList={this.state.gearList}
         onRemoveItem = {this.removeItem}
         onNavigate={() => {
           this.setState({ screen:'create' })
         }}
       /> 
        )}
        {this.state.screen === 'create' && (
          <CreateGearItem/>
        )}
      </div>
    )
  }
}

export default App;