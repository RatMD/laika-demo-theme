<october>
url = "/wiki/search"
layout = "Wiki.vue"
title = "Search Wiki Articles"
meta_title = "Search - Wiki"

[collection wiki]
handle = "Page\Article"
as = articles
paginate = 4
where[] = "searchWhere,$term,title,content"

[resources]
vars[activeNavLink] = "wiki"
</october>

<template>
    <Head>
        <title>{{ searchTerm }} - Search Results</title>
    </Head>
    <div class="container">
        <header>
            <h1>{{ searchTerm }} - Search Results</h1>
        </header>
        <div class="row">
            <div class="col-md-12">
                <form class="mb-5">
                    <div class="input-group">
                        <div class="form-control-search">
                            <input type="text" name="term" class="form-control" placeholder="Search" :value="searchTerm" />
                            <span class="search-icon"></span>
                        </div>
                    </div>
                </form>

                <div class="pb-3">
                    <div v-for="article in articles.data || []" :key="article.id" class="card mb-3">
                        <div class="card-body pb-0">
                            <h5 class="wiki-article-title">
                                <a :href="$october.page('wiki/article', { fullslug: article.fullslug, id: article.id })">
                                    {{ article.title }}
                                </a>
                            </h5>
                            <div v-html="$october.htmlLimit(article.content || '', 250)"></div>
                        </div>
                    </div>
                </div>
                <nav class="wiki-pagination" aria-label="Pagination">
                    <Pagination v-if="articles.links" v-bind="articles" />
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head, useComponent } from '@ratmd/laika';
import { computed } from 'vue';
import WikiLayout from '@/layouts/Wiki.vue';
import Pagination from '@/partials/Pagination.vue';

defineOptions({ layout: WikiLayout });

const wiki = useComponent('wiki');
const searchTerm = computed(() => String(wiki.get('term', '')).trim());
const articles = computed<any>(() => wiki.get('articles', { data: [], links: [] }));
</script>
