module.exports = {
	content: ["./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				grey: "#DFDFDF",
				transparent: "rgb(0, 0, 0, 0)",
			},
			fontFamily: {
				dm: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};

// module.exports = {
// 	content: ["./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		colors: {
// orange: "#D87D4A",
// red: "#FF0000",
// black: "#101010",
// },
// 		fontFamily: {
// 			manrope: ["Manrope", "Verdana", "sans-serif"],
// 		},
// 		screens: {
// 			sm: "640px", // => @media (min-width: 640px) { ... }
// 			md: "768px", // => @media (min-width: 768px) { ... }
// 			lg: "1024px", // => @media (min-width: 1024px) { ... }
// 			xl: "1280px", // => @media (min-width: 1280px) { ... }
// 			"2xl": "1536px", // => @media (min-width: 1280px) { ... }
// 		},

// 		container: {
// 			center: true,
// 			padding: {
// 				DEFAULT: "0rem",
// 				sm: "0rem",
// 				md: "0rem",
// 			},
// 		},
// 		animation: {
// 			spinning: " spinning 1s linear infinite",
// 			wiggle: "wiggle 1s ease-in-out infinite",
// 		},

// 		keyframes: {
// 			spinning: {
// 				"0%": {
// 					transform: " rotate(0deg)",
// 				},
// 				"100%": {
// 					transform: "rotate(360deg)",
// 				},
// 			},
// 			wiggle: {
// 				"0%, 100%": {
// 					transform: "rotate(-90deg)",
// 				},
// 				"50%": {
// 					transform: "rotate(90deg)",
// 				},
// 			},
// 		},
// 		extend: {
// 			fontSize: {
// 				xs: ["12px", "18px"],
// 			},
// 		},
// 	},
// 	plugins: [],
// };
