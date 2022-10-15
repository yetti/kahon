const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/components/**/*.{js,css,rb,html.erb}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        heading: ['Lora', ...defaultTheme.fontFamily.serif],
        subheading: ['Montserrat', ...defaultTheme.fontFamily.serif],
        code: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        normal: ['Open Sans', ...defaultTheme.fontFamily.sans],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
