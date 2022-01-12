export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    //   validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !massage ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    //   store message in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res
      .status(201)
      .json({ meaage: "Successfully store message", message: newMessage });
  }
}
