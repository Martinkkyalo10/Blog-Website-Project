import classes from "./Contact-form.module.css";

export default function ContactForm() {
  return (
    <section className={classes.contact}>
      <h>How can i help you?</h>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmFor="email">Your Email</label>
            <input type="email" id="email" required />{" "}
          </div>
          <div className={classes.control}>
            <label htmFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmFor="message">Your Massage</label>
          <textarea id="message" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
