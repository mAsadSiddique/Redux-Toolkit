import { useDispatch } from "react-redux";
import { reactionAdded } from "../../ReducerSlices/PostSlice/postSlice";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "💖",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionsButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji}
          {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionsButtons;
