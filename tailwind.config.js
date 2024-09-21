/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 0 0 100vmax rgba(0,0,0,.2)"
            },
            scale: {
                "115": "1.15",
                "120": "1.2"
            }
        },
    },
    plugins: [],
}

