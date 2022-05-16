module.exports = {
	// npx tailwindcss -i ./src/assets/css/inputs_styles.css -o ./public/css/outputs_styles.css --minify --watch
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"]
			}
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			cwhite: "#FAFAFA",
			cblack: "#002037",
			cgray: {
				100: "#60606013",
				300: "#60606043",
				800: "#60606097",
				900: "#606060"
			},
			cgreen: "#009C98",
			cyellow: "#FFCE00"
		}
	},
	plugins: []
};
