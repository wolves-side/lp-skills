import type { Config } from "tailwindcss";

const config = {
	darkMode: "class",
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1152px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					50: "hsl(var(--primary-50))",
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					400: "hsl(var(--primary-400))",
					500: "hsl(var(--primary-500))",
					600: "hsl(var(--primary-600))",
					700: "hsl(var(--primary-700))",
					800: "hsl(var(--primary-800))",
					900: "hsl(var(--primary-900))",
					950: "hsl(var(--primary-950))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
					50: "hsl(var(--secondary-50))",
					100: "hsl(var(--secondary-100))",
					200: "hsl(var(--secondary-200))",
					300: "hsl(var(--secondary-300))",
					400: "hsl(var(--secondary-400))",
					500: "hsl(var(--secondary-500))",
					600: "hsl(var(--secondary-600))",
					700: "hsl(var(--secondary-700))",
					800: "hsl(var(--secondary-800))",
					900: "hsl(var(--secondary-900))",
					950: "hsl(var(--secondary-950))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					50: "hsl(var(--accent-50))",
					100: "hsl(var(--accent-100))",
					200: "hsl(var(--accent-200))",
					300: "hsl(var(--accent-300))",
					400: "hsl(var(--accent-400))",
					500: "hsl(var(--accent-500))",
					600: "hsl(var(--accent-600))",
					700: "hsl(var(--accent-700))",
					800: "hsl(var(--accent-800))",
					900: "hsl(var(--accent-900))",
					950: "hsl(var(--accent-950))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
				display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"marquee": "marquee var(--duration) linear infinite",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"marquee": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
