import fs from 'node:fs';
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import laika from "@ratmd/laika/vite";
import dotenv from 'dotenv';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
    const envPath = path.resolve(__dirname, '.env')
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath })
    }

    function env(key: string, defaultValue: unknown = null) {
        if (key in process.env) {
            return process.env[key];
        } else {
            return defaultValue;
        }
    }

    const base = __dirname;
    const theme = path.basename(__dirname);

    return {
        base: `/themes/${theme}/assets/`,
        publicDir: path.resolve(__dirname, 'assets'),
        plugins: [
            laika(),
            laravel({
                input: [
                    'resources/theme.ts'
                ],
                hotFile: path.join(base, 'assets', '.hot'),
                refresh: {
                    paths: [
                        './**/*',
                    ]
                },
            }),
            vue(),
        ],
        build: {
            manifest: true,
            outDir: './assets/',
            rollupOptions: {
                output: {
                    manualChunks: (id: string) => id.includes('node_modules') ? 'vendor' : void 0
                },
            }
        },
        resolve: {
            alias: {
                '@': __dirname,
            },
            dedupe: ["vue", "@vue/runtime-core"],
        },
        server: {
            cors: true,
            host: env('VITE_HOST', '0.0.0.0'),
            hmr: {
                host: env('VITE_HOST', '0.0.0.0'),
            },
            allowedHosts: env('VITE_HOST', null) ? [ env('VITE_HOST') ] : [],
            https: env('VITE_HTTPS', false) ? {
                key: fs.readFileSync(env('VITE_HTTPS_KEY') as string, 'utf-8'),
                cert: fs.readFileSync(env('VITE_HTTPS_CERT') as string, 'utf-8'),
            }: void 0
        }
    } as any;
});
