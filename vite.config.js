import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/styles/variables.scss";`
        // Uncomment the line above and adjust the path if you have global SCSS variables or mixins.
      },
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 1,
          features: {
            "nesting-rules": true,
          },
        }),
      ],
    },
  },
});
