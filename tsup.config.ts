import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["registry/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  outDir: "dist",
  tsconfig: "tsconfig.build.json",
});
