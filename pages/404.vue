<october>
title = "Page Not Found (404)"
url = "/404"
layout = "Default.vue"

[resources]
</october>

<template>
    <Head>
        <meta name="turbo-visit-control" content="error" />
    </Head>
    <div class="container page-404">
        <div class="banner-404">
            <h1>Page Not Found</h1>
            <p>We're sorry, but the page you requested cannot be found.</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@ratmd/laika';
import DefaultLayout from '@/layouts/Default.vue';

defineOptions({ layout: DefaultLayout });
</script>

<style lang="css" scoped>
.page-404 {
    .banner-404 {
        padding: 40px 0;
    }
}
</style>
