import { prisma } from "@/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
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
                
                return null
            },
        }),
    ],

    pages: {
        signIn: "/login",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
