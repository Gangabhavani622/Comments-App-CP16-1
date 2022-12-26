import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], username: '', comment: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      username,
      comment,
      date: new Date(),
      initialClassName: initialContainerBackgroundClassNames,
      isLike: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      comment: '',
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const afterDeletion = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: afterDeletion})
  }

  render() {
    const {commentsList} = this.state
    const count = commentsList.length

    return (
      <div className="main-cont">
        <h1>Comments</h1>
        <p>Say Something about 4.0 Technologies</p>
        <div className="form-cont">
          <div>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                className="username"
                placeholder="Your Name"
                onChange={this.onChangeUsername}
              />
              <textarea
                className="comment"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button type="submit" onClick={this.addNewComment}>
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="image"
          />
        </div>
        <hr />
        <div className="comments-cont">
          <p className="comments-count">{count}</p>
          <p>Comments</p>
        </div>
        <ul className="comments-list">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentItem={eachComment}
              toggleLike={this.toggleLike}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
