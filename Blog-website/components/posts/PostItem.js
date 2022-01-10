import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./PostItem.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  // format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // the image that will be recieved from props will only be a filename and there constructing a fullpath is necessary
  const imagePath = `/images/posts/${slug}/${image}`;

  // get exact link path to individual post item
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
