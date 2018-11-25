import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListGear extends Component {
	static propTypes = {
		gearList: PropTypes.array.isRequired,
		onRemoveItem: PropTypes.func.isRequired
	}
	
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim() })
	}

	clearQUery = () => {
		this.setState({ query: '' })
	}

	render() {
		const { gearList, onRemoveItem } = this.props
		const { query } = this.state

		let showingGearItems = [];
		if (query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingGearItems = gearList.filter((gearItem) => match.test(gearItem.name))
		} else {
			showingGearItems = gearList
		}

		showingGearItems.sort(sortBy('weight'))

		return (
			<div className='list-gear'>
				<div className='list-gear-top'>
					<input 
						className='search-gear'
						type='text'
						placeholder='Search gear'
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
					<Link 
						to='/create'
						className='add-gear'
					>Add Gear</Link>
				</div>

				{showingGearItems.length !== gearList.length && (
					<div className='showing-gear'>
						<span>Now Showing {showingGearItems.length} of {gearList.length}</span>
						<button onClick={this.clearQUery}>Show all</button>
					</div>
				)}

				<ol className='gear-list'>
				{showingGearItems.map((gearItem) => (
					<li key={gearItem.id} className='gear-list-item'>
						<div className='gear-avatar' style={{
							backgroundImage:`url(${gearItem.avatarURL})`
						}}/>
						<div className='gear-details'>
							<p>{gearItem.name}</p>
							<p>{gearItem.weight} oz.</p>
							<p>{gearItem.avatarURL}</p>
							<p>{gearItem.id}</p>
							{console.log(gearItem)}
						</div>
						<button onClick={() => onRemoveItem(gearItem)} className='gear-remove'>
							Remove
						</button>
					</li>
				))}
			</ol>
			
			
			</div>
		)
	}


}

export default ListGear