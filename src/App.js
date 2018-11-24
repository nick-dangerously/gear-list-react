import React, { Component } from 'react';
import ListGear from './ListGear'

// const gearList = [
//     {
//       "id": "tent",
//       "name": "Big Agnes Copper Spur UL2",
//       "weight": "54",
//       "avatarURL": "http://localhost:5001/ryan.jpg"
//     },
//     {
//       "id": "sleepingBag",
//       "name": "GoLite Ultra 20",
//       "weight": "17",
//       "avatarURL": "http://localhost:5001/michael.jpg"
//     },
//     {
//       "id": "backpack",
//       "name": "Hyperlite Mountain Gear Dyneema Summit Bag",
//       "weight": "17",
//       "avatarURL": "http://localhost:5001/tyler.jpg"
//     }
//   ]

class App extends Component {
  state = {
    gearList: [
      {
        "id": "tent",
        "name": "Big Agnes Copper Spur UL2",
        "weight": "54",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "sleepingBag",
        "name": "GoLite Ultra 20",
        "weight": "17",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "backpack",
        "name": "Hyperlite Mountain Gear Dyneema Summit Bag",
        "weight": "17",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
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