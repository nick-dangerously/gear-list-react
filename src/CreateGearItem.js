import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateGearItem extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, {hash: true})
    this.props.onCreateGearItem(values)
  }
  
  render() {
    return (
      <div>
        <Link className='close-create-gear' to='/'>Close</Link>
        <form onSubmit={this.handleSubmit} className='create-gear-form'>
          <ImageInput
            className='create-gear-avatar-input'
            name='AvatarURL'
            maxHeight={64}
          />
          <div className='create-gear-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='weight' placeholder='Weight (oz)'/>
            <button>Add Gear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateGearItem