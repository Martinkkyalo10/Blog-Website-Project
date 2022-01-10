import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostsGrid from "./../posts/PostsGrid";

export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      {/* This pages outputs posts marked as featured */}
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
