import React, { Component } from 'react';
// container related packages
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

// This is actuall Container, but this app's components are mostly Container
// So I will let this to sit under components
class PostsIndex extends Component {
  // React calls automatically whenever component is rendered on DOM for the first time
  componentWillMount() {
    console.log('this would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// Which action creators does it want to receive by props?
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }

// export default PostsIndex;
// export default connect(null, mapDispatchToProps)(PostsIndex);

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// 1st argument is mapStateToProsps(which we won't use).
// 2nd argument is mapDispacthToProps
export default connect(null, { fetchPosts })(PostsIndex); //ES6 syntax
