module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#212529',
        'yellow-select': '#FFB742'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}