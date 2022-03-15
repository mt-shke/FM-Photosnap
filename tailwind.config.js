module.exports = {
	content: ["./src/components/**/*.js"],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				grey: "#DFDFDF",
				gray: "#f5f5f5",
				orange: "#5A77FF",
				red: "#BC7198",
				blue: "#FFC593",
				transparent: "rgb(0, 0, 0, 0)",
			},
			fontFamily: {
				dm: ["DM Sans", "sans-serif"],
			},

			animation: {
				fade: "fadeIn .3s ease-in",
				move: "move .5s ease-out",
				rise: "rise .5s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				move: {
					"0%": {
						transform: "translate(2rem)",
					},
					"100%": {
						transform: "translate(0)",
					},
				},
				rise: {
					"0%": {
						transform: "translateY(1.5rem)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
