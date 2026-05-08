import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./lib/db";
import User from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Password",
        },
      },
     async  authorize(credentials, request) {
          try {
            await connectDb()
            const email = credentials.email
            const password = credentials.password
            const user = await User.findOne({email})
          } catch (error) {
            
          }
      },
    }),
  ],
});

