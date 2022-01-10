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
  const imagePath = `/image/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
