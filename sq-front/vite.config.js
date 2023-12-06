import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  // manifest: {
  //   name: "strange quark portfolio",
  //   short_name: "sq-portfolio",
  //   icons: [
  //     {
  //       src: "/assets/strange-quark-logo-blackhole-dark.svg",
  //       sizes: "1000x1000",
  //       type: "image/svg",
  //       purpose: "any",
  //     },
  //     {
  //       src: "/assets/strange-quark-logo-blackhole-dark-small.png",
  //       sizes: "192x192",
  //       type: "image/png",
  //       purpose: "any",
  //     },
  //   ],
  // },
});
