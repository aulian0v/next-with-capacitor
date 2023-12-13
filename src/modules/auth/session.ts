import type { SessionInstance } from "./types";
import * as WebSession from "./sessions/web-session";
import * as MobileSession from "./sessions/mobile-session";

const createSession = (): SessionInstance => {
  if (process.env.PLATFORM === "mobile") {
    return MobileSession;
  }

  return WebSession;
};

const { SessionProvider, useSession } = createSession();

export { SessionProvider, useSession };
