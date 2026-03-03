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
                :key="article.id"
                :article="article"
                active-slug="" />
        </ul>
    </div>
</template>

<script lang="ts" setup>
import WikiTocItem from '@/partials/wiki/WikiTocItem.vue';
</script>
