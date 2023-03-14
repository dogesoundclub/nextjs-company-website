module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        fontFamily: {
            BrothersBold : "BrothersBold",
            neodgm: "neodgm", // 오른쪽이 실제 폰트명이 됨.
        },
    },
    plugins: [],
}
