const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			serif: ['Nanum Myeongjo', ...defaultTheme.fontFamily.serif],
		},
		colors: {
			'darkBlue': '#0B3C4A',
			'mediumBlue': '#93B7CD',
			'lightBlue': '#DFEDF3',
			'yellow': '#FFD700',
			'white': '#FFFFFF'
		},
		extend: {
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
