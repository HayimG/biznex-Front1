
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				biznex: {
					navy: '#0F2C59',
					'light-navy': '#1A4D8C',
					'dark-navy': '#081C3A',
					blue: '#3E92CC',
					gray: '#8E9196',
					// New color scheme
					primary: '#3A56E4',
					secondary: '#10B981',
					accent: '#F97316',
					dark: '#111827',
					gray: '#64748B',
					light: '#F9FAFB',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(15px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 0 0px rgba(58, 86, 228, 0.4)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 0 10px rgba(58, 86, 228, 0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'underline-expand': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shine': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
					'50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
				},
				'draw-line': {
					'0%': { strokeDasharray: '300', strokeDashoffset: '300' },
					'100%': { strokeDasharray: '300', strokeDashoffset: '0' }
				},
				'float-horizontal': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(10px)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.95)', opacity: '1' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'rotate-3d': {
					'0%': { transform: 'perspective(1000px) rotateY(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateY(10deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'underline-expand': 'underline-expand 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'shine': 'shine 1.5s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite',
				'gradient-x': 'gradient-x 5s ease infinite',
				'draw-line': 'draw-line 1.5s ease-in-out forwards',
				'float-horizontal': 'float-horizontal 4s ease-in-out infinite',
				'ripple': 'ripple 1.5s ease-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 5s ease-in-out infinite alternate',
				'shimmer': 'shimmer 3s infinite linear'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '16px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'tech-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsLW9wYWNpdHk9Ii4wMyIgZmlsbD0iIzNBNTZFNCIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsLW9wYWNpdHk9Ii4wMyIgZmlsbD0iIzNBNTZFNCIvPjwvZz48L3N2Zz4=')"
			}
		}
	},
	plugins: [require("tailwindcss-animate"), {
		handler: function({ addUtilities, theme, e }) {
			const animationDelayUtilities = {};
			[100, 200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 4000, 5000].forEach(delay => {
				animationDelayUtilities[`.animation-delay-${delay}`] = {
					'animation-delay': `${delay}ms`,
				};
			});
			
			const glassUtilities = {
				'.glass-effect': {
					'background': 'rgba(255, 255, 255, 0.13)',
					'backdrop-filter': 'blur(10px)',
					'-webkit-backdrop-filter': 'blur(10px)',
					'border': '1px solid rgba(255, 255, 255, 0.18)',
					'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
				},
				'.tech-card': {
					'background': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(58,86,228,0.05) 100%)',
					'backdrop-filter': 'blur(7px)',
					'-webkit-backdrop-filter': 'blur(7px)',
					'border': '1px solid rgba(255, 255, 255, 0.12)',
					'box-shadow': '0 4px 16px 0 rgba(31, 38, 135, 0.08)',
					'transition': 'all 0.3s ease',
				},
				'.tech-card-hover': {
					'transform': 'translateY(-3px)',
					'box-shadow': '0 10px 25px 0 rgba(58,86,228,0.12)',
				},
				'.shimmer': {
					'background': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
					'background-size': '200% 100%',
				}
			};
			
			addUtilities(animationDelayUtilities, ['responsive']);
			addUtilities(glassUtilities, ['responsive', 'hover']);
		}
	}],
} satisfies Config;
