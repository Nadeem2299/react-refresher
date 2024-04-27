import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from'./PostList.module.css'
const PostList = ({isPosting, onStopPosting}) => {
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
      />
    </Modal>)}

    {/* another approach */}
    {/* {modalContent} */}
    
    <ul className={classes.posts}>
      <Post author="nadeem ahmed" body="react js is awesome again" />
    </ul>
    </>
  )
}

export default PostList
