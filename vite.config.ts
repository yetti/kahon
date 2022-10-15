import { resolve } from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import StimulusHMR from 'vite-plugin-stimulus-hmr'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'app/assets'),
    },
  },
  plugins: [
    RubyPlugin(),
    StimulusHMR(),
    FullReload(["config/routes.rb", "app/views/**/*"], {delay: 200}),
  ],
})
