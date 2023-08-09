import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// path is gotten from  npm i -D @types/node
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{
            find: '@', replacement: path.resolve(__dirname, 'src')
        }]
    }
})
