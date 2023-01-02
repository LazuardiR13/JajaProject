/** @type {import('tailwindcss').Config} */

module.exports = {
  layers: ['components'],
      content: ["./src/**/*.{html,js,jsx,css}", './node_modules/tw-elements/dist/js/**/*.js'],
      theme: {
        extend: {
          colors: { 
            primary: '#003060',
            secondary: '#0E86D4',
            ternery:'#68BBE3'     
          }
        },
      },
      plugins: [
        require('tw-elements/dist/plugin')]
    }