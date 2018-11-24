import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

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
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input 
						className='search-contacts'
						type='text'
						placeholder='Search gear'
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>

				{/* Returns exp1 if false, otherwise returns exp2 */}
				{showingGearItems.length !== gearList.length && (
					<div className='showing-contacts'>
						<span>Now Showing {showingGearItems.length} of {gearList.length}</span>
						<button onClick={this.clearQUery}>Show all</button>
					</div>
				)}

				<ol className='contact-list'>
				{showingGearItems.map((gearItem) => (
					<li key={gearItem.id} className='contact-list-item'>
						<div className='contact-avatar' style={{
							backgroundImage:`url(${gearItem.avatarURL})`
						}}/>
						<div className='contact-details'>
							<p>{gearItem.name}</p>
							<p>{gearItem.weight} oz.</p>
						</div>
						<button onClick={() => onRemoveItem(gearItem)} className='contact-remove'>
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