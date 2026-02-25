<october>
description = "Default layout"
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


    <!-- Header -->
    <header id="layout-header">
        <SiteHeader />
    </header>
    <SiteFlashMessages />

    <!-- Content -->
    <section id="layout-content">
        <PageContent />
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
import { Head, PageContent } from '@ratmd/laika';
</script>
