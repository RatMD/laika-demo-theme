<template>
    <ul :class="$attrs.class || 'navbar-nav ms-auto mb-2 mb-lg-0'">
        <li class="nav-item">
            <Link page="blog/index" :class="['nav-link', activeNavLink === 'blog' ? 'active' : void 0]">Blog</Link>
        </li>
        <li class="nav-item">
            <Link page="wiki/index" :class="['nav-link', activeNavLink === 'wiki' ? 'active' : void 0]">Wiki</Link>
        </li>
        <li class="nav-item">
            <Link page="about" :class="['nav-link', activeNavLink === 'about' ? 'active' : void 0]">About</Link>
        </li>
        <li class="nav-item">
            <Link page="contact" :class="['nav-link', activeNavLink === 'contact' ? 'active' : void 0]">Contact</Link>
        </li>
        <li class="nav-item">
            <Link page="components" :class="['nav-link', activeNavLink === 'components' ? 'active' : void 0]">Components Demo</Link>
        </li>
        <li v-if="$components?.sitePicker?.props?.isEnabled" class="nav-item dropdown">
            <a class="btn btn-outline-light dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ currentSite.name || 'Sites' }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="site in sites" :key="site.code">
                    <a :class="`dropdown-item ${currentSite.code == site.code ? 'active' : void 0}`" :href="site.url">{{ site.name }}</a>
                </li>
                <li v-if="$components?.backendLink?.props?.backendUrl"><hr class="dropdown-divider"></li>
                <li v-if="$components?.backendLink?.props?.backendUrl">
                    <a class="dropdown-item" :href="String($components?.backendLink?.props?.backendUrl ?? '')">Backend Area</a>
                </li>
            </ul>
        </li>
        <li v-else-if="$components?.backendLink?.props?.backendUrl" class="nav-item">
            <a class="btn btn-outline-light" :href="String($components?.backendLink?.props?.backendUrl ?? '')" target="backend">Backend Area</a>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Link, useComponent, usePayload } from '@rat.md/laika';
import { computed, ref, watch } from 'vue';

// Composable
const sitePicker = useComponent('sitePicker');
const { page, site } = usePayload() as ReturnType<typeof usePayload> & { site: { value: any } };

// States
const sites = ref<any[]>([]);
const currentSite = computed<any>(() => site.value ?? {});
const activeNavLink = computed<string>(() => {
    const component = page.value?.component
        ?.replace(/\.vue$/i, '')
        .toLowerCase();

    return component?.split('/')[0] ?? '';
});

// Watch sitePicker
watch(() => sitePicker.props?.isEnabled, async (enabled) => {
    if (!enabled) {
        sites.value = [];
    } else {
        sites.value = await sitePicker.load('sites') ?? [];
    }
}, { immediate: true });
</script>
