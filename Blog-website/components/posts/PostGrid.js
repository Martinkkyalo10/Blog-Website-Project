import React from "react";
import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}
