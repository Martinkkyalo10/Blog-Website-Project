import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/martin.jpg"
          alt="Martin Kyalo"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi, I'm Martin Kyalo</h1>
      <p>
        I blog about web development -especially on both frontend and backend
        frameworks and technologies like React, Angular, Express, MongoDB and
        NextJS.
      </p>
    </section>
  );
}
