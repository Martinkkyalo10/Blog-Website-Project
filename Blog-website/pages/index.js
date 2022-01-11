import { Fragment } from "react";
import FeaturedPosts from "../components/home-page-components/FeaturedPosts";
import Hero from "../components/home-page-components/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 300,
  };
}
