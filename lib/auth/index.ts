import { NextAuthOptions, getServerSession } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const clientId = process.env.KAKAO_REST_API_KEY || '';

const clientSecret = process.env.KAKAO_CLIENT_SECRET || '';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId,
      clientSecret,
    }),
  ],
  secret: process.env.JWT_SECRET_KEY,
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
};
