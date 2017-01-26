import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'

const FIELDS =  {
  title: {
    type: 'input',
    label: 'Title for Post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories'
  },
  content: {
    type: 'textarea',
    label: 'Post Contents'
  }
};
// ['title', 'categories', 'content'];

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      // blog post has been created, navigate the user to IndexRoute
      // We navigate by calling this.context.router.push with then
      // new path to navigate to.
      this.context.router.push('/')
    });
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    // const title = this.props.fields.title;
    console.log(title);

    // ...title
    // Destructuring of the object(title) and passes its properties into input
    //
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`
    }
  })

  return errors;
}

// connect: first argument is mapstateToprops, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapstateToprops, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm', //some unique token
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);

// export default PostsNew;
