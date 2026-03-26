import { type Config } from 'tailwindcss'

export const theme = {
  extend: {},
}

export default <Config>{
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme,
  plugins: [],
}
