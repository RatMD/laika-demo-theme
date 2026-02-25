<october>
description = "External layout"
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
                    <img :src="$october.theme('assets/images/logo.svg')" alt="October CMS Demo" width="230" />
                </a>
            </div>
        </nav>
    </header>
    <SiteFlashMessages />

    <!-- Content -->
    <section id="layout-content">
        <PageContent />
    </section>

    <!-- Footer -->
    <footer id="layout-footer">
        <div class="element-footer">
            <div class="container">
            </div>
        </div>

        <SiteModalAlertDialog />
        <SiteModalPasswordDialog />
        <SiteModalAjax />
    </footer>
</template>

<script lang="ts" setup>
import { Head, PageContent } from '@ratmd/laika';
</script>
