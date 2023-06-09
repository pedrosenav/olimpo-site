/** @type {import('tailwindcss').Config} */

export default {
	content: ['/index.html', './src/*/**.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},

			colors: {
				olimpo_yellow: '#E4AA15',
				olimpo_blue: '#14222B',
			},

			screens: {
				xs: '485px',
				// => @media (min-width: 485px)
				
				sm: '640px',
				// => @media (min-width: 640px)

				md: '768px',
				// => @media (min-width: 768px)

				lg: '1024px',
				// => @media (min-width: 1024px

				xl: '1280px',
				// => @media (min-width: 1280px

				'2xl': '1536px',
				// => @media (min-width: 1536px
			},
		},
	},
	plugins: [],
}
