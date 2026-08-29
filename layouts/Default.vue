<october>
description = "Default layout"

[backendLink]

[sitePicker]
eager[] = isEnabled

[section footerNav]
eager[] = items.toNested
handle = "Site\Menus"
identifier = "slug"
value = "footer-nav"

[resources]
meta[author] = "October CMS"
meta[generator] = "October CMS"
vars[activeNavLink] = 'home'
</october>

<template>
    <Head>
        <link rel="icon" type="image/png" :href="$october.theme('assets/images/favicon.png')" />
    </Head>

    <!-- Header -->
    <header id="layout-header">
        <SiteHeader />
    </header>
    <SiteFlashMessages />

    <!-- Content -->
    <section id="layout-content">
        <slot name="default" />
    </section>

    <!-- Footer -->
    <footer id="layout-footer">
        <SiteFooter />
    </footer>

    <!-- Mobile -->
    <SiteNavMobile />

    <!-- How the page is made -->
    <SiteHowItsMade />
</template>

<script lang="ts" setup>
import { Head } from '@rat.md/laika';
import SiteFlashMessages from '@/partials/site/SiteFlashMessages.vue';
import SiteFooter from '@/partials/site/SiteFooter.vue';
import SiteHowItsMade from '@/partials/site/SiteHowItsMade.vue';
import SiteNavMobile from '@/partials/site/SiteNavMobile.vue';
import SiteHeader from '@/partials/site/SiteHeader.vue';

defineOptions({ inheritAttrs: false });

defineProps<{ activeNavLink?: string }>();
</script>
