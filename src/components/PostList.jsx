import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from'./PostList.module.css'
const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  }
  // let modalContent;
  // if(isModalVisible) {
  //   modalContent = <Modal onClose={hideModalHandler}>
  //   <NewPost 
  //   onBodyChange={changeBodyHandler} 
  //   onAuthorChange = {changeAuthorHandler}
  //   />
  // </Modal>;    
  // }
  return (
    <>
    {/* {isModalVisible?<Modal onClose={hideModalHandler}>
      <NewPost 
      onBodyChange={changeBodyHandler} 
      onAuthorChange = {changeAuthorHandler}
      />
    </Modal>:null} */}

    {/* another approach */}
    {isPosting && (<Modal onClose={onStopPosting}>
      <NewPost 
      onCancel = {onStopPosting}
      onAddPost = {addPostHandler}
      />
    </Modal>)}

    {/* another approach */}
    {/* {modalContent} */}
    {posts.length > 0 && (
      <ul className={classes.posts}>
      {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
    </ul>
    )}
    {posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white'}}>
      <h2>No posts yet!</h2>
    </div>
    )}
    </>
  )
}

export default PostList
