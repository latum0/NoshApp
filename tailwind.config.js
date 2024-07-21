/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        'pblack': ['Poppins-Black', 'sans-serif'],
        'pblackitalic': ['Poppins-BlackItalic', 'sans-serif'],
        'pbold': ['Poppins-Bold', 'sans-serif'],
        'pbolditalic': ['Poppins-BoldItalic', 'sans-serif'],
        'pextrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'pextrabolditalic': ['Poppins-ExtraBoldItalic', 'sans-serif'],
        'pextralight': ['Poppins-ExtraLight', 'sans-serif'],
        'pextralightitalic': ['Poppins-ExtraLightItalic', 'sans-serif'],
        'pitalic': ['Poppins-Italic', 'sans-serif'],
        'plight': ['Poppins-Light', 'sans-serif'],
        'plightitalic': ['Poppins-LightItalic', 'sans-serif'],
        'pmedium': ['Poppins-Medium', 'sans-serif'],
        'pmediumitalic': ['Poppins-MediumItalic', 'sans-serif'],
        'pregular': ['Poppins-Regular', 'sans-serif'],
        'psemibold': ['Poppins-SemiBold', 'sans-serif'],
        'psemibolditalic': ['Poppins-SemiBoldItalic', 'sans-serif'],
        'pthin': ['Poppins-Thin', 'sans-serif'],
        'pthinitalic': ['Poppins-ThinItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

