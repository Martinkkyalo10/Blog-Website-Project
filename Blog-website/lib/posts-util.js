import fs from "fs";
import path from "path";
import matter from "gray-matter";

// construct an absolute path to the posts directory using path module
const postsDirectory = path.join(process.cwd(), "posts");

// get post data from post files
function getPostData(fileName) {
  // read the content of a file
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // split the content and data properties from fileContent using matter function imported from gray-matter
  const { data, content } = matter(fileContent);

  // get the post slug from file name by replacing the its extension with an empty string
  const postSlug = fileName.replace(/\.md$/, ""); // removes extension

  // prepare post data that whould be returned
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getAllPosts() {
  // read all the content from the directory with fs node module
  const postFiles = fs.readdirSync(postsDirectory);

  // map through post files to get all posts
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFiles);
  });

  // sort posts to start by the latest (by date)

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

// get featured posts
export function getFeaturedPosts() {
  // first get all posts and filter them
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
