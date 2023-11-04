/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx}",
        "node_modules/flowbite-react/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            animation: {
                "infinite-scroll": "infinite-scroll 47s linear infinite",
              },
              keyframes: {
                "infinite-scroll": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(-100%)" },
                }
              } 
        },
    },
    plugins: [require("flowbite/plugin")],
};
