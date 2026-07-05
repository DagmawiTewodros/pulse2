// Project configuration. Custom presets were previously provided by an external
// starter package; this file now uses the base Vite `defineConfig` instead.
import { defineConfig } from "vite";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
