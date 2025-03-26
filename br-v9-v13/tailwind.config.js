module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx}", // Kollar alla sidor
        "./src/components/**/*.{js,jsx}", // Kollar alla komponenter
        "./src/app/**/*.{js,jsx}", // Kollar appen om den finns i en separat mapp
    ],
    theme: {
        extend: {
            colors: {
            },
        },
    },
    plugins: [],
    darkMode: 'class', // enables Dark Mode with ' dark ' class
};
