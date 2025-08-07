import User from "../../../models/User";
import { hashPassword } from "../../../utils/auth";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in Connecting to DB!!" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ status: "failed", message: "Invalid Data !!" });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return res
      .status(422)
      .json({ status: "failed", message: "User already exist!!" });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({ email: email, password: hashedPassword });
  console.log(newUser);

  res
    .status(201)
    .json({ status: "success", message: "user created", data: newUser });
}
