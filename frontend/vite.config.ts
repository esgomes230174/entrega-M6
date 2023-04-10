import * as reactPlugin from "vite-plugin-react";
import type { UserConfig } from "vite";

const config: UserConfig = {
  jsx: "react",
  plugins: [reactPlugin],
  optimizeDeps: {
    include: ["react-dom/client", "swiper/react"],
  },
};

export default config;
