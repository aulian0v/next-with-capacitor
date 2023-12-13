import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "next-with-capacitor",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://192.168.1.6:3000",
    cleartext: true,
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: process.env.GOOGLE_ID,
    },
  },
};

export default config;
