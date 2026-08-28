<october>
url = "/blog/category/:slug/:id"
layout = "Blog.vue"
title = "Display a Blog Category"

[section category]
handle = "Blog\Category"
identifier = "id"

[collection blog]
handle = "Blog\Post"
as = posts
paginate = 16
whereParams[slug] = "{{ :slug }}"
where[] = "whereRelation,categories,slug,$slug"
relations[] = categories
relations[] = author

[resources]
vars[activeBlogCategory] = "{{ :slug }}"
</october>

<template>
    {{ $october.setPlaceholder('pageTitle', 'Articles in ' + $components?.category.get('title')) }}
    <template v-if="$components?.blog.get('posts', [])">
        <div v-if="$components?.blog.get('posts', [] as any).data?.length" class="blog-featured row row-cols-1 row-cols-xl-2 g-3 pb-5">
            <BlogPostCard v-for="post of $components?.blog.get('posts', [] as any).data" :key="post.id" :post="post" banner-css="banner-lg" />
        </div>
        <div v-else class="card card-post border-0 bg-white mb-5">
            <div class="card-body py-5 text-center">
                <h2 class="h4 mb-2">No articles in this category yet.</h2>
                <p class="text-secondary mb-0">Try another category or check back again soon.</p>
            </div>
        </div>
        <Pagination class="blog-pagination" v-bind="$components?.blog.get('posts', [] as any)" />
    </template>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/Blog.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';
import Pagination from '@/partials/Pagination.vue';

// Define Component
defineOptions({ layout: BlogLayout });
</script>
