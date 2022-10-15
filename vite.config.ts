import { resolve } from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import StimulusHMR from 'vite-plugin-stimulus-hmr'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'app/assets'),
      '@node_modules': resolve(__dirname, 'node_modules'),
    },
  },
  plugins: [
    RubyPlugin(),
    StimulusHMR(),
    FullReload([
      './app/views/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/assets/stylesheets/**/*.{css,scss}',
      './app/javascript/**/*.js',
      './app/frontend/components/**/*.{js,css,rb,html.erb}',
      'config/routes.rb'
    ], {delay: 200}),
  ],
})
