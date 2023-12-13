import type { FC, ReactNode } from "react";
import type { Session as WebSession } from "next-auth";

export interface UserData {
  name?: string | null;
  email?: string | null;
  imageUrl?: string | null;
}

export interface Session {
  data: UserData | null;
  signIn(): void;
  signOut(): void;
}

export interface SessionInstance {
  useSession(): Session;
  SessionProvider: FC<{ children: ReactNode; session?: WebSession }>;
}
