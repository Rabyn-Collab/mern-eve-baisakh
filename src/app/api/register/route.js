import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { username, email, password } = await request.json();

  try {
    await dbConnect();
    const hashPassword = bcrypt.hashSync(password, 10);
    await User.create({
      username,
      email,
      password: hashPassword
    });
    return Response.json({ message: 'User created successfully' });

  } catch (err) {
    return Response.json({ message: err.message });

  }

}