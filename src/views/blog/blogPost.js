import React from 'react'
import * as Markdown from 'react-markdown'

const BlogPost = (props) => (
  <div className="box content">
    <h1 id="postTitle">{props.title}</h1>
    <h2 id="postTimestamp">{props.createdon}</h2>
    <Markdown id="postContent" source={props.content} />
  </div>
)
export default BlogPost