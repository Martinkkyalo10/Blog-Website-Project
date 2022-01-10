import AllPosts from "./../../components/posts/AllPosts";
export default function PostListPage(props) {
  const dummyPosts = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Nextjs",
      image: "i1.jpg",
      excerpt:
        "NextJS is a React framework for production. It makes building fullstack React web apps easy.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with Nextjs",
      image: "i2.jpg",
      excerpt:
        "NextJS is a React framework for production. It makes building fullstack React web apps easy.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with Nextjs",
      image: "i3.jpg",
      excerpt:
        "NextJS is a React framework for production. It makes building fullstack React web apps easy.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with Nextjs",
      image: "i4.jpg",
      excerpt:
        "NextJS is a React framework for production. It makes building fullstack React web apps easy.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs5",
      title: "Getting Started with Nextjs",
      image: "i5.jpg",
      excerpt:
        "NextJS is a React framework for production. It makes building fullstack React web apps easy.",
      date: "2022-02-10",
    },
  ];
  return <AllPosts posts={dummyPosts} />;
}
