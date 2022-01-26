import './App.css';
import Post from './components/Post';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App d-flex">
      <div className='col-md-8'>
        <PostList />
      </div>
      <div className='d-flex align-items-center col-md-4 border'>
        <Post />
      </div>
    </div>
  );
}

export default App;
