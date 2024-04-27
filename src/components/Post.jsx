
import classes from'./Post.module.css'
// const names = ['Nadeem', 'Ahmed']

const Post = (props) => {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={classes.post}>
      {/* <p className={classes.author}>{chosenName}</p> */}
      <p className={classes.text}>{props.author}-  {props.body}</p>``
    </li>
  )
}

export default Post
