/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                fvTopHeader: "#0F007D",
                fvMiddleHeader: "#FFFFFF",
                fvBottomHeader: "#255DAE",
                fvBackground: "#F0F1F3",
                fvLightBlue: "#123599",
                fvDarkBlue: "#102D4C",
                fvInactive: "#9EACC1",
                fvAccent: "#235DAE",
                fvLogo: "#004C97",
            },
        },
    },
    plugins: [],
};
