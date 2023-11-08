/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx}",
        "node_modules/flowbite-react/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
          colors: {
            primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
          },
            animation: {
                "infinite-scroll": "infinite-scroll 110s linear infinite",
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
