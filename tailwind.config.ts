import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
          },
    },
  },
  plugins: [],
}

export default config
