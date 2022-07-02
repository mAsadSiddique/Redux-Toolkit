import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../ReducerSlices/User/userSlice";

const PostAuthor = ({ userId }) => {  
  console.log("userId", userId);
  const users = useSelector(selectAllUsers);
  console.log("Users", users); 

  const author = users.find((user) => user.id === userId);
  console.log("author Name", author);

  return <span>By: {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
