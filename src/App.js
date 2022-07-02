import "./App.css";
// import Counter from "./Components/Counter";
import PostList from "./Components/Post/PostList";
import { AddPostForm } from "./Components/Post/AddPostForm";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
