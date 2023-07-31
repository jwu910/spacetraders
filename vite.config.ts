/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/SpaceTraders/" : "./",
  plugins: [solidPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
    setupFiles: ["node_modules/@testing-library/jest-dom/extend-expect.js"],
    // otherwise, solid would be loaded twice:
    deps: { registerNodeLoader: true },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  server: { port: 3000 },
  build: {
    target: "esnext",
  },
  resolve: {
    conditions: ["development", "browser"],
  },
}));
