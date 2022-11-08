module.exports = {
  content: [
    './src/assets/styles/**/*.css',
    './src/components/**/*.svelte',
    './src/routes/**/*.svelte',
    './src/app.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Aspekta Variable"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Arial',
          'sans-serif'
        ]
      }
    }
  }
}
