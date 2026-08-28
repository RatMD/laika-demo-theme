/// <reference types="vite/client" />

declare global {
    interface Window {
        bootstrap: typeof bootstrap;
    }
}

declare module 'jquery' {
    const jquery: any;
    export default jquery;
}

export {};
