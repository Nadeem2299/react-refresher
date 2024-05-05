import Post from './Post'
import classes from'./PostList.module.css'
import { useLoaderData } from 'react-router-dom'
const PostList = () => {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  // useEffect(() => {
  //   async function fetchPosts() {
  //   setIsFetching(true);
  //   const response = await fetch('http://localhost:8080/posts')
  //   const resData = await response.json();
  //   setPosts(resData.posts);
  //   setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method:"POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   setPosts((existingPost) => [postData, ...existingPost]);
  // }
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
    {/* {isPosting && (<Modal onClose={onStopPosting}>
      <NewPost 
      onCancel = {onStopPosting}
      onAddPost = {addPostHandler}
      />
    </Modal>)} */}

    {/* another approach */}
    {/* {modalContent} */}
    {/* {!isFetching && posts.length > 0 && ( */}
    {posts.length > 0 && (
      <ul className={classes.posts}>
      {posts.map((post) => <Post key={post.body} id={post.id} author={post.author} body={post.body}/>)}
    </ul>
    )}
    {/* {!isFetching && posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white'}}></div> */}
    {posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white'}}>
      <h2>There are No posts yet!</h2>
      <p>Start adding Some!</p>
    </div>
    )}
    {/* {isFetching && <p>Loading posts...</p>} */}
    </>
  )
}

export default PostList
