import {Component} from 'react'
import BlogDetails from '../BlogItemDetails'

class BlogList extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const update = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({blogData: update})
  }

  render() {
    const {blogData} = this.state
    console.log(blogData)

    return (
      <ul>
        {blogData.map(each => (
          <BlogDetails each={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
