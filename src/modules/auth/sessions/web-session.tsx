import {
  SessionProvider as WebSessionProvider,
  useSession as useWebSession,
  signIn,
  signOut,
} from "next-auth/react";
import type { SessionInstance } from "../types";

export const SessionProvider: SessionInstance["SessionProvider"] = ({
  children,
  session,
}) => {
  return <WebSessionProvider session={session}>{children}</WebSessionProvider>;
};

export const useSession: SessionInstance["useSession"] = () => {
  const { data } = useWebSession();
  const user = data?.user;

  return {
    data: user
      ? { name: user.name, email: user.email, imageUrl: user.image }
      : null,
    signIn: () => signIn(),
    signOut: () => signOut(),
  };
};
