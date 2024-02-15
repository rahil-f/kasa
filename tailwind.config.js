/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                homeHeader: "url('/src/assets/homeHeader.png')",
            },
        },
    },
    plugins: [],
};
