<template>
    <div class="sidebar-search">
        <form :action="$october.page('wiki/search')" method="get">
            <div class="form-control-search">
                <input type="text" name="term" class="form-control" placeholder="Search" value="" />
                <span class="search-icon"></span>
            </div>
        </form>
    </div>

    <div class="sidebar-toc">
        <h3>Table of Contents</h3>
        <ul class="bullet-list">
            <WikiTocItem v-for="article in $components?.wikiNav.get('items', [])"
                :key="(article as any).id"
                :article="article"
                :active-slug="activeSlug" />
        </ul>
    </div>
</template>

<script lang="ts" setup>
import WikiTocItem from '@/partials/wiki/WikiTocItem.vue';
import { useComponent } from '@ratmd/laika';
import { computed } from 'vue';

const wiki = useComponent('wiki');
const activeSlug = computed(() => String(wiki.get('fullslug', '')));
</script>
