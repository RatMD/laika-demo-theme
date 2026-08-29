<october>
description = "Wiki layout"

[backendLink]

[sitePicker]
eager[] = isEnabled

[collection wikiNav]
handle = "Page\Article"
paginate = nested

[section footerNav]
eager[] = items.toNested
handle = "Site\Menus"
identifier = "slug"
value = "footer-nav"

[resources]
meta[author] = "October CMS"
meta[generator] = "October CMS"
vars[activeNavLink] = 'wiki'
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
        <div class="container">
            <div class="row g-5">
                <div class="col-md-4">
                    <div class="position-sticky" style="top: 2rem;">
                        <WikiSidebar />
                    </div>
                </div>
                <div class="col-md-8">
                    <slot name="default" />
                </div>
            </div>
        </div>
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
import WikiSidebar from '@/partials/wiki/WikiSidebar.vue';

defineOptions({ inheritAttrs: false });

defineProps<{ activeNavLink?: string }>();
</script>

<style lang="css">
body.layout-wiki {
    .sidebar-search {
        padding-bottom: 40px;
    }
}
</style>
