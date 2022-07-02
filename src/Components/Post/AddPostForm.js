import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../ReducerSlices/PostSlice/postSlice";
import { selectAllUsers } from "../../ReducerSlices/User/userSlice";

export const AddPostForm = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  // console.log(users);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserID] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserID(e.target.value);

  const handleOnClickSavedPost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={handleOnClickSavedPost}
          disabled={!canSave}
        >
          Add Post
        </button>
      </form>
    </section>
  );
};
