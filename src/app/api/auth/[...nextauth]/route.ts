import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '@/libs/prisma';
import bcrypt from 'bcrypt';
import { AuthOptions } from "next-auth";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const userFound = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!userFound) throw new Error("Invalid credentials");

        const validPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!validPassword) throw new Error("Invalid credentials");

        return {
          id: userFound.id.toString(),
          name: userFound.name,
          email: userFound.email,
          role: userFound.role
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/Login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };