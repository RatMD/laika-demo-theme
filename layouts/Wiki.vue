<october>
description = "Wiki layout"
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
                    <PageContent />
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
</script>
