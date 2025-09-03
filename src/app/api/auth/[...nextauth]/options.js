

import CredentialsProvider from "next-auth/providers/credentials";



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
        const user = {
          id: 1,
          name: "John Doe",
          email: 'rabyn900@gmail.com',
        };
        if (credentials.email === user.email && credentials.password === 'password') {
          return user;
        }
        return null;

      },
    }),
  ]

}