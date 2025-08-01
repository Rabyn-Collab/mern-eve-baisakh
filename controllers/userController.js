import bcrypt from 'bcrypt';
import User from '../models/User.js';


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email });
    if (!isExist) return res.status(409).json({ message: 'user doesn\'t  exist' });

    const passMatch = bcrypt.compareSync(password, isExist.password);
    if (!passMatch) return res.status(401).json({ message: 'invalid credentials' });

    return res.status(200).json({ message: 'logged in Successfully' });
  } catch (err) {
    return res.status(500).json({ err: `${err}` });
  }

}


export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isExist = await User.findOne({ email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });
    const hashPass = bcrypt.hashSync(password, 10);

    await User.create({
      email,
      username,
      password: hashPass
    });
    return res.status(200).json({ message: 'user registered Successfully' });
  } catch (err) {
    return res.status(500).json({ err: `${err}` });

  }

}