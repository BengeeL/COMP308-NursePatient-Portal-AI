import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shellApp",
      remotes: {
        authenticationApp: "http://localhost:3001/assets/remoteEntry.js",
        nursePortalApp: "http://localhost:3002/assets/remoteEntry.js",
        patientPortalApp: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@apollo/client", "graphql"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
