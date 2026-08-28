<template>
    <div v-if="$october.hasPlaceholder('headerBefore')" v-html="$october.placeholder('headerBefore')"></div>
    <nav id="layout-nav" class="navbar navbar-expand-lg navbar-dark">
        <div class="navbar-container container">
            <a class="navbar-brand" :href="$october.page('index')">
                <img src="@/assets/images/logo.svg" alt="October CMS Demo" width="230" />
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
    <div v-if="$october.hasPlaceholder('headerAfter')" v-html="$october.placeholder('headerAfter')"></div>
</template>

<script lang="ts" setup>
import SiteNavLinks from '@/partials/site/SiteNavLinks.vue';
</script>
