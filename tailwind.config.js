module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F2994A',
                    dark: '#ed7913'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}