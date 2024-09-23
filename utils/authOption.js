import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      //1-connect to database
      //2-check if user exists
      //3-if not, create user
      //4-return true to allow sign in
    },
    async session({ session }) {
      //1- get user from database
      //2-assign user id from session
      //3-return session
    },
  },
};

export default NextAuth(authOptions);
