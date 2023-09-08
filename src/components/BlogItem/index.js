// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, avatarUrl, topic, title, author} = blogData

  return (
    <Link className="link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="img-url" />
        <div className="item-info-container">
          <p className="item-topic">{topic}</p>
          <p className="item-title">{title}</p>
          <div className="author-info-con">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
