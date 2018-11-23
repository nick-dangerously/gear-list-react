import React, { Component } from 'react'

function ListGear (props) {
	return (
		<ol className='contact-list'>
		{props.gearList.map((gearItem) => (
			<li key={gearItem.id} className='contact-list-item'>
				<div className='contact-avatar' style={{
					backgroundImage:`url(${gearItem.avatarURL})`
				}}/>
				<div className='contact-details'>
					<p>{gearItem.name}</p>
					<p>{gearItem.weight} oz.</p>
				</div>
				<button onClick={() => props.onRemoveItem(gearItem)} className='contact-remove'>
					Remove
				</button>
			</li>
		))}
	</ol>
	)
}

export default ListGear