module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx}", // Kollar alla sidor
        "./src/components/**/*.{js,jsx}", // Kollar alla komponenter
        "./src/app/**/*.{js,jsx}", // Kollar appen om den finns i en separat mapp
    ],
    theme: {
        extend: {
            colors: {
                grape: "rgba(114, 35 ,204)", // Exempel på en anpassad färg
            },
        },
    },
    plugins: [],
    darkMode: 'class', // Aktiverar Dark Mode via 'dark' klass
};
