import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTHNEXT_SECRET,
  debug: process.env.NODE_ENV === "development",
};