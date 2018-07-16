import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inputClassNames = [];

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focusedInput: false
		};

		this.createInput = this.createInput.bind(this);
		this.focusedInput = this.focusedInput.bind(this);
		this.setFocusedInput = this.setFocusedInput.bind(this);
	}

	createInput() {
		if (this.props.fullBorder) {
			inputClassNames.push(' input-full-border');
		} else {
			inputClassNames.push(' input-border-bottom')
		}
		if (this.props.borderColor) {
			inputClassNames.push(` input-border-${this.props.borderColor}`);
		}

		return (
			<input
				placeholder={ this.props.placeholderText }
				className={ inputClassNames.join() }
				onClick={ this.setFocusedInput }
			/>
		);
	}

	setFocusedInput() {
		this.setState({
			focusedInput: true
		});
	}

	focusedInput() {
		return (
			<div>
				<div className="focused-input-placeholder">
					{ this.props.placeholderText }
				</div>
				<input
					placeholder=''
					className={ inputClassNames.join() }
					focused
				/>
			</div>
		);
	}

	render() {
		if (this.state.focusedInput) {
			return this.focusedInput();
		} else {
			return this.createInput();
		}
	}
}

Input.propTypes = {
	fullBorder: PropTypes.bool,
	borderColor: PropTypes.string
}

Input.defaultProps = {
	fullBorder: false,
	borderColor: ''
}

export default Input;