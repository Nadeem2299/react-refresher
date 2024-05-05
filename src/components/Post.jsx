import { Link } from 'react-router-dom'
import classes from'./Post.module.css'
// const names = ['Nadeem', 'Ahmed']

const Post = (props) => {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={classes.post}>
      {/* <p className={classes.author}>{chosenName}</p> */}
      <Link to={props.id}>
      <h5 className={classes.author}>{props.author}-</h5>
      <p className={classes.text}>{props.body}</p>
      </Link>
    </li>
  )
}

export default Post
