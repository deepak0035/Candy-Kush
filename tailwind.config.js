/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        westcoast: ["var(--font-westcoast)"],
        westcoastline: ["var(--font-westcoastline)"],
        krakens: ["var(--font-krakens)"],
      },
      colors: {
        carpetMoss: "#02A633",
        pottBlack: "#161616",
        chiGong: "#D32929",
        selected: "#76CE91",
        blurred: "#DDF2E3",
      },
      backgroundImage: {
        base: "url('/images/bg.png')",
        bg1: "url('/images/bg1.png')",
        bg2: "url('/images/bg2.png')",
        bg3: "url('/images/bg3.png')",
        smoke1: "url('/images/smoke1.png')",
        smoke2: "url('/images/smoke2.png')",
        smoke3: "url('/images/smoke3.png')",
        texture: "url('/images/texture.png')",
      },
    
    },
  },
  plugins: [],
};
