import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
	render(){
		return (
			<main>
				{this.props.children}
			</main>
		)
	}
}