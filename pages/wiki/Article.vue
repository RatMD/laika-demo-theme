<october>
url = "/wiki/:fullslug*/:id"
layout = "Wiki.vue"
title = "Wiki Article"
meta_title = "{{ wiki.title }}"

[section wiki]
handle = "Page\Article"
identifier = "id"
relations[] = external_links
</october>

<template>
    <div class="container">
        <div class="py-3">
            {% partial 'wiki/breadcrumb' article=article %}
        </div>

        <article class="wiki-article pb-3">
            <h1 class="wiki-article-title mb-3">{{ article.title }}</h1>
            <p class="lead">{{ article.summary_text }}</p>

            <div class="wiki-banner mb-3">
                <div v-if="article.banner" class="text-banner" :style="{ backgroundImage: `url('${article.banner.path}')` }"></div>
                <div v-else class="text-banner" :style="{ backgroundImage: `url('${randomImage}')` }"></div>
            </div>

            <div v-html="article.content" />

            <div class="wiki-article-gallery mb-3">
                {% partial 'controls/gallery-slider' gallery=article.gallery %}
            </div>
        </article>

        {% partial 'wiki/continue' article=article %}

        <template v-if="article.external_links && article.external_links.length > 0">
            <hr />
            <h2>External Links</h2>
            <ul class="bullet-list list-content">
                <li v-for="(link, idx) of article.external_links" :key="idx">
                    <a :href="link.link_url" target="_blank">{{ link.link_text }}</a>
                </li>
            </ul>
        </template>
    </div>
</template>

<script lang="ts" setup>
import WikiLayout from '@/layouts/Wiki.vue';
import { useComponent } from '@ratmd/laika';
import { computed } from 'vue';

// Define Component
defineOptions({ layout: WikiLayout });

// Composable
const wiki = useComponent('wiki');

// States
const article = computed<any>(() => wiki.props);
const randomImage = computed<string>(() => {
    const images = import.meta.glob('@/resources/images/stock/*.png', {
        eager: true,
        import: 'default'
    }) as Record<string, string>;
    const paths = Object.values(images);
    return paths[Math.floor(Math.random() * paths.length)];
});
</script>

