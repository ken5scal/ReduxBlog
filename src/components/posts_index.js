import React, { Component } from 'react';
// container related packages
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// This is actuall Container, but this app's components are mostly Container
// So I will let this to sit under components
class PostsIndex extends Component {
  // React calls automatically whenever component is rendered on DOM for the first time
  componentWillMount() {
    console.log('this would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
          <span className="pull-xs-right">
            {post.categories}
          </span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProsps(state) {
  return { posts: state.posts.all };
}

// Which action creators does it want to receive by props?
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }

// export default PostsIndex;
// export default connect(null, mapDispatchToProps)(PostsIndex);

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// 1st argument is mapStateToProsps(which we won't use).
// 2nd argument is mapDispacthToProps ( props.fetchPost(): () => dispatch(fetchPost()))
export default connect(mapStateToProsps, { fetchPosts })(PostsIndex); //ES6 syntax
