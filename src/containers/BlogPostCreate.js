import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createBlogPost } from '../actions'

function BlogPostCreate(props) {

  function gatherPost(event){
    event.preventDefault()

    props.createBlogPost({
      title: event.target.blogPostTitle.value,
      content: event.target.blogPostContent.value
    }, ()=>{
      props.history.push('/')
    })
  }

  return (
    <div className='container'>
      <div className='row' style={{
          marginBottom: '32px'
        }}>
        <div className='col-md-12'>
          <div>
            <Link to='/'>Front page</Link>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <form name='newblogpost' onSubmit={gatherPost}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Blog Post Title</label>
              <input type="text"
                className="form-control"
                id="blogPostTitle"
                name="blogPostTitle"/>
            </div>
            <div className="form-group">
              <label htmlFor="blogPostContent">Blog Post Content</label>
              <textarea
                className="form-control"
                id="blogPostContent"
                rows="10"
                name="blogPostContent" >
              </textarea>
            </div>
            <button type="submit" className="btn btn-secondary">Create Blog Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({createBlogPost}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(BlogPostCreate))
