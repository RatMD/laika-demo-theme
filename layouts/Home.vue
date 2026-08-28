<october>
description = "Home layout"

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

    <!-- Nav -->
    <nav id="layout-nav" class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" :href="$october.page('index')">
                <img src="@/assets/images/logo.svg" alt="October CMS Demo" width="190" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <SiteNavLinks />
            </div>
        </div>
    </nav>
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
import { Head } from '@ratmd/laika';
import SiteNavLinks from '@/partials/site/SiteNavLinks.vue';
import SiteFlashMessages from '@/partials/site/SiteFlashMessages.vue';
import SiteFooter from '@/partials/site/SiteFooter.vue';
import SiteNavMobile from '@/partials/site/SiteNavMobile.vue';
import SiteHowItsMade from '@/partials/site/SiteHowItsMade.vue';
</script>

<style lang="css">
body.layout-home {
    #layout-nav.navbar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    #layout-content {
        padding-top: 0;
    }
}
</style>
