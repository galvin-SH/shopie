/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx}",
        "node_modules/flowbite-react/**/*.{js,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
