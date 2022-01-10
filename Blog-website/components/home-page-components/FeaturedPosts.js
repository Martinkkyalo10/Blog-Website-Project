import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostGrid from "./../posts/PostGrid";

export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      {/* This pages outputs posts marked as featured */}
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
