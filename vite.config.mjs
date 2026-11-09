// Serves the static EFC × SpatialChat site (synced from GitHub) as-is in the preview.
import { defineConfig } from "vite";

export default defineConfig({
  root: "sites/efc-spatialchat/dist",
  publicDir: false,
  server: { host: "::", port: 8080, strictPort: true, allowedHosts: true },
  build: { outDir: "../../../dist", emptyOutDir: true },
});
