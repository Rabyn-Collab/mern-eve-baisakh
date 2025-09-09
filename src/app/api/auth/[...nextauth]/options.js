import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcrypt";


export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        const isExist = await User.findOne({ email: credentials.email });
        if (!isExist) {
          return null
        };
        const comparePass = bcrypt.compareSync(credentials.password, isExist.password);
        if (!comparePass) {
          return null
        };
        return isExist
      },
    }),
  ],
  pages: {
    signIn: "/form/login",
  },

}