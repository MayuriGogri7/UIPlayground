import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { newpost } from '../actions/postActions';
class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		debugger;
		const post = {
			title: this.state.title,
			body: this.state.body,
		};
		this.props.newpost(post);
	}
	render() {
		return (
			<div>
				<h1>Add post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>titel:</label>
						<br />
						<input
							type='text'
							name='title'
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<br />
					<div>
						<label>body:</label>
						<br />
						<textarea
							name='body'
							onChange={this.onChange}
							value={this.state.body}
						/>
					</div>
					<br />
					<button type='submit'>submit</button>
				</form>
			</div>
		);
	}
}
Postform.protoTypes = {
	newpost: Proptypes.func.isRequired,
};
export default connect(null, { newpost })(Postform);
