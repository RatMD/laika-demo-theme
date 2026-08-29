<october>
url = "/wiki/search"
layout = "Default.vue"
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
                <form class="mb-5" @submit.prevent="onSearch">
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
                                <Link page="wiki/article" :params="{ fullslug: article.fullslug, id: article.id }">
                                    {{ article.title }}
                                </Link>
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
import { Head, Link, useComponent, useOctober, useRouter } from '@rat.md/laika';
import { computed } from 'vue';
import DefaultLayout from '@/layouts/Default.vue';
import Pagination from '@/partials/Pagination.vue';

defineOptions({ layout: DefaultLayout });

const wiki = useComponent('wiki');
const october = useOctober();
const router = useRouter();
const searchTerm = computed(() => String(wiki.get('term', '')).trim());
const articles = computed<any>(() => wiki.get('articles', { data: [], links: [] }));

function onSearch(event: Event): void {
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) {
        return;
    }

    const url = october.page('wiki/search', {}, false);
    if (!url) {
        return;
    }

    const term = String(new FormData(form).get('term') ?? '').trim();
    const query = new URLSearchParams();
    if (term) {
        query.set('term', term);
    }

    void router.get(query.size ? `${url}?${query.toString()}` : url);
}
</script>
