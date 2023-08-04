
import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
		colors: {
			primary: '#50E4A5',
			gray:  '#5A5D60',
			white: colors.white,
			black: colors.black,
			beige: '#F0EFE9',
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Overpass', 'sans-serif', '"Noto Color Emoji"'],
		},
		fontWeight: {
			thin: 400,
			normal: 500,
			semibold: 600,
		},
		container: {
			center: true,
		},
	},
  plugins: [],
}

