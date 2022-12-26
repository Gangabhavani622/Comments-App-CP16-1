// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentItem, toggleLike, onDeleteComment} = props
  const {id, username, comment, date, initialClassName, isLike} = commentItem

  const onChangeLike = () => {
    toggleLike(id)
  }

  const deleteComment = () => {
    onDeleteComment(id)
  }
  const initial = username.slice(0, 1)
  const likebutton = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  return (
    <li className="list-item">
      <p>
        <span className={initialClassName}>{initial} </span>{' '}
        <span>{username}</span> {date}
      </p>
      <p>{comment}</p>
      <div className="btn-cont">
        <button type="button" className="button" onClick={onChangeLike}>
          <img src={likebutton} alt="like" />
        </button>
        <button type="button" className="button" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
