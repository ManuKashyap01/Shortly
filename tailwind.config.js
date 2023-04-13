/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      cyan:'hsl(180,66%,49%)',
      dark_violet:'hsl(257,27%,26%)',
      red:'hsl(0,87%,67%)',
      gray:'hsl(0,0%,75%)',
      gray_violet:'hsl(257,7%,63%)',
      vdark_blue:'hsl(255,11%,22%)',
      vdark_violet:'hsl(260,8%,14%)'
    },
    backgroundImage:{
      shorten:"url('/bg-shorten-desktop.svg')",
      shorten_mb:"url('/bg-shorten-mobile.svg')",
      boost:"url('/bg-boost-desktop.svg')",
      boost_mb:"url('/bg-boost-mobile.svg')"

    },
    extend: {},
  },
  plugins: [],
}