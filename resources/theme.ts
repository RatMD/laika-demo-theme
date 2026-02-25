import './styles/theme.css';

import { createApp, h } from "vue";
import { createLaikaApp, type ResolveResult } from "@ratmd/laika";
import DayjsDirective from "@/resources/directives/dayjs";

/**
 * Main Application Runtime
 */
async function main() {
    createLaikaApp({
        title(title: string) { return `October CMS${title ? (' - ' + title) : ''}`; },
        resolve(name: string) {
            name = (name.endsWith('.vue') ? name.slice(0, -4) : name).toLowerCase();

            const pages: Record<string, ResolveResult> = Object.fromEntries(
                Object.entries(import.meta.glob('../pages/**/*.vue', { eager: true })).map(
                    ([key, val]) => [key.toLowerCase(), val]
                )
            ) as Record<string, ResolveResult>;

            if (`../pages/${name}.vue` in pages) {
                return pages[`../pages/${name}.vue`];
            } else if (`../pages/${name}Page.vue` in pages) {
                return pages[`../pages/${name}Page.vue`];
            } else {
                throw new Error(`Laika: Vue Page component for "${name}" not found.`);
            }
        },
        setup({ App, root, props, plugin }) {
            const app = createApp({ render: () => h(App, props) });
            app.use(plugin);
            app.directive('dayjs', DayjsDirective);
            app.mount(root);
            return app;
        }
    });
}
main();
