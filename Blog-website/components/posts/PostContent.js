import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";

const samplePost = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Nextjs",
  image: "i1.jpg",
  content: "# This is a first post",
  date: "2022-02-10",
};

export default function PostContent() {
  const imagePath = `/images/posts/${samplePost.slug}/${samplePost.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={samplePost.title} image={imagePath} />
      <ReactMarkdown>{samplePost.content}</ReactMarkdown>
    </article>
  );
}
