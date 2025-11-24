/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                primary: '#06b6d4', // Cyan 500 (Tech/Trust)
                secondary: '#3b82f6', // Blue 500 (Police/Official)
                accent: '#f97316', // Orange 500 (Alert/Vigilance)
                alert: '#ef4444', // Red 500 (Danger/Panic)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
