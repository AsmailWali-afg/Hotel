import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{outDir:'dist'},
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
  
//   server:{
//     host:'0.0.0.0',
//     port:5000
//   }
//   // plugins: [react()],
// })
