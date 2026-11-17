import { defineConfig, lazyPlugins } from "vite-plus";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const port =
    process.env.PORT ||
    (mode === "public" ? process.env.PUBLIC_PORT || "3000" : process.env.ADMIN_PORT || "3001");
  const target = `http://127.0.0.1:${port}`;
  return {
    fmt: {
      insertFinalNewline: true,
      endOfLine: "lf",
      useTabs: false,
      tabWidth: 2,
      sortPackageJson: false,
      svelte: true,
      ignorePatterns: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/target/**",
        "**/vendor/**",
        "**/*.md",
        "**/*.mdx",
        "**/package-lock.json",
        "**/pnpm-lock.yaml",
      ],
    },
    staged: { "*": "vp check --fix" },
    lint: {
      ignorePatterns: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/target/**",
        "**/vendor/**",
        "**/*.md",
        "**/*.mdx",
        "**/package-lock.json",
        "**/pnpm-lock.yaml",
      ],
      jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
      rules: { "vite-plus/prefer-vite-plus-imports": "error" },
      options: { typeAware: true, typeCheck: true },
    },
    pack: {
      entry: ["apps/server/src/main.ts"],
      format: ["esm"],
      outDir: "build/server",
      clean: true,
      dts: false,
    },
    root: "apps/web",
    base: "./",
    plugins: lazyPlugins(() => [svelte({ configFile: path.resolve("svelte.config.js") })]),
    resolve: {
      alias: {
        "@entry": path.resolve(`apps/web/src/entries/${mode === "admin" ? "admin" : "public"}.ts`),
      },
    },
    build: { outDir: path.resolve(`build/${mode}`), emptyOutDir: true },
    server: { port: 5173, strictPort: true, proxy: { "/api": target, "/media": target } },
  };
});
