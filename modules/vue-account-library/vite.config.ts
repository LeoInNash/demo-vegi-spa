import vue from '@vitejs/plugin-vue';

import * as path from 'path';

export default {
    base: 'http://localhost:3000',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(
            {
                template: {
                    transformAssetUrls: {
                        base: '/src'
                    }
                }
            }
        ),
    ],
    build: {
        rollupOptions: {
            sourcemap: false,
            input: {
                app: 'src/main.ts'
            },
            preserveEntrySignatures: true,
            output: {
                entryFileNames: '[name].js',
                dir: 'js',
                format: 'system'
            }
        }
    }
}

