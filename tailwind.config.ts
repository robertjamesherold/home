import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config