import { useEffect, createContext, useContext, useState } from "react";
import type { SessionInstance, Session } from "../types";

const defaultSession = {
  data: null,
  signIn: () => {
    throw new Error("SessionProvider not initialized");
  },
  signOut: () => {
    throw new Error("SessionProvider not initialized");
  },
};

const MobileSession = createContext<Session>(defaultSession);

export const SessionProvider: SessionInstance["SessionProvider"] = ({
  children,
}) => {
  const [session, setSession] = useState<Session>(defaultSession);

  const updateSession = (data: Partial<Session>) => {
    setSession((prevSession) => ({
      ...prevSession,
      ...data,
    }));
  };

  useEffect(() => {
    // Зависимости от мобилки не должны попасть в бандл для веба
    import("@codetrix-studio/capacitor-google-auth").then(({ GoogleAuth }) => {
      GoogleAuth.initialize();

      const signIn = () => {
        return GoogleAuth.signIn().then((user) => {
          updateSession({
            data: {
              name: user.name,
              email: user.email,
              imageUrl: user.imageUrl,
            },
          });
        });
      };

      const signOut = () => {
        return GoogleAuth.signOut().then(() => {
          setSession(defaultSession);
        });
      };

      updateSession({ data: null, signIn, signOut });
    });
  }, []);

  return (
    <MobileSession.Provider value={session}>{children}</MobileSession.Provider>
  );
};

export const useSession: SessionInstance["useSession"] = () => {
  return useContext(MobileSession);
};
