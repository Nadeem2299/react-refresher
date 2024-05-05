import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState('');
  // const [enteredAuthor, setEnteredAuthor] = useState('');
  // function changeBodyHandler(event) {
  //   setEnteredBody(event.target.value);    
  // }

  // function changeAuthorHandler(event) {
  //   setEnteredAuthor(event.target.value);    
  // }
  

  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor
  //   };
  //   console.log(postData);
  //   onAddPost(postData);
    
  // }
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required />
        </p>
        <p className={classes.actions}>
        <Link type='button' to='/'>Cancel</Link>
        <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  // formData.get('body');
  const postData = Object.fromEntries(formData); // { body: '...', author: '...'}
  console.log(postData);
    await fetch('http://localhost:8080/posts', {
      method:"POST",
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return redirect('/');
}