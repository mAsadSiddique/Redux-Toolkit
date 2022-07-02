import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../../ReducerSlices/PostSlice/postSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  console.log("Posts", posts);


  const renderPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.id} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPost}
    </section>
  );
};

export default PostList;
