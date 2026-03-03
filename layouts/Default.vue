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
        <nav id="layout-nav" class="navbar navbar-expand-lg navbar-dark">
            <div class="navbar-container container">
                <a class="navbar-brand" :href="$october.page('index')">
                    <img src="@/resources/images/logo.svg" alt="October CMS Demo" width="230" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <SiteNavLinks />
                </div>
            </div>
        </nav>
        <div id="layout-nav-decorations">
            <div class="navbar-decorations container">
                <div class="navbar-decoration-1"></div>
                <div class="navbar-decoration-2"></div>
            </div>
        </div>
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
import { Head } from '@ratmd/laika';
import SiteFlashMessages from '@/partials/site/SiteFlashMessages.vue';
import SiteFooter from '@/partials/site/SiteFooter.vue';
import SiteHowItsMade from '@/partials/site/SiteHowItsMade.vue';
import SiteNavMobile from '@/partials/site/SiteNavMobile.vue';
import SiteNavLinks from '@/partials/site/SiteNavLinks.vue';
</script>
