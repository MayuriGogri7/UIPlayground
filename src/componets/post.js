import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchpost } from '../actions/postActions';
import PropTypes from 'prop-types';
class Posts extends Component {
	componentWillMount() {
		this.props.fetchpost();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.newPosts) {
			this.props.posts.unshift(nextProps.newPosts);
		}
	}
	render() {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));

		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}
Posts.propTypes = {
	fetchpost: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPosts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPosts: state.posts.item,
});
export default connect(mapStateToProps, { fetchpost })(Posts);
