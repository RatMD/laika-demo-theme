<october>
url = "/blog/author/:slug"
layout = "Default.vue"
title = "Display a Blog Author"

[section author]
handle = "Blog\Author"
identifier = "slug"
relations[] = social_links

[collection blogCategories]
handle = "Blog\Category"

[global blogConfig]
handle = "Blog\Config"

[collection blog]
handle = "Blog\Post"
as = posts
paginate = 5
whereParams[slug] = "{{ :slug }}"
where[] = "whereRelation,author,slug,$slug"
relations[] = categories
relations[] = author

[resources]
vars[activeNavLink] = 'blog'
</october>

<template>
    <main class="container ps-0 pe-0">
        <header>
            <h1>Posts by {{ $components?.author.get('title', '') }}</h1>
        </header>
        <div class="blog-featured row mb-2">
            <div class="col-md-12">
                <div class="card card-post mb-4">
                    <div class="card-body">
                        <UserPanelAuthor :user="$components?.author.props" :hide-all-posts="true" />
                    </div>
                </div>
            </div>
        </div>

        <template v-if="$components?.blog.get('posts', [])">
            <div class="blog-featured row row-cols-1 row-cols-xl-2 g-3 pb-5">
                <BlogPostCard v-for="post of $components?.blog.get('posts', []).data" :key="post.id" :post="post" banner-css="banner-lg" />
            </div>
            <Pagination v-bind="$components?.blog.get('posts', [])" />
        </template>
    </main>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/Default.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';
import UserPanelAuthor from '@/partials/elements/UserPanelAuthor.vue';
import Pagination from '@/partials/Pagination.vue';

// Define Component
defineOptions({ layout: DefaultLayout });
</script>
