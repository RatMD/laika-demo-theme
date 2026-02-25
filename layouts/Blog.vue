<october>
description = "Blog layout"

[backendLink]

[sitePicker]
eager[] = isEnabled

[section footerNav]
eager[] = items.toNested
handle = "Site\Menus"
identifier = "slug"
value = "footer-nav"

[collection blogCategories]
handle = "Blog\Category"

[global blogConfig]
handle = "Blog\Config"

[resources]
meta[author] = "October CMS"
meta[generator] = "October CMS"
vars[activeNavLink] = "blog"
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
        <div class="container">
            <header v-if="$october.hasPlaceholder('pageTitle')">
                <h1>{{ $october.placeholder('pageTitle') }}</h1>
            </header>

            <div class="row g-5">
                <div class="col-md-8">
                    <div class="pe-3">
                        <slot name="default" />
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="position-sticky" style="top: 2rem;">
                        <BlogSidebar />
                    </div>
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
import { Head } from '@ratmd/laika';
import SiteFlashMessages from '@/partials/site/SiteFlashMessages.vue';
import SiteNavLinks from '@/partials/site/SiteNavLinks.vue';
import BlogSidebar from '@/partials/blog/BlogSidebar.vue';
import SiteFooter from '@/partials/site/SiteFooter.vue';
import SiteNavMobile from '@/partials/site/SiteNavMobile.vue';
import SiteHowItsMade from '@/partials/site/SiteHowItsMade.vue';
</script>
