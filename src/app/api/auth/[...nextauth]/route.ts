import { prisma } from "@/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        username: credentials?.username,
                    },
                });

                if (user && credentials?.password === user.password) {
                    const { password, ...userWithoutPass } = user;

                    return userWithoutPass;
                }

                return null;
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },

    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
