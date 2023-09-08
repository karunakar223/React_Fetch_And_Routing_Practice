// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.blogsApiUrl()
  }

  blogsApiUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      avatarUrl: eachData.avatar_url,
      imageUrl: eachData.image_url,
      author: eachData.author,
      topic: eachData.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem key={eachBlog.id} blogData={eachBlog} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
