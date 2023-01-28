/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                96: '55vh',
            },
        },
        screens: {
            sm: '680px',
            md: '820px',
            lg: '1180px',
            xl: '1480px',
            '2xl': '1736px',
        },
    },
    plugins: [],
};
