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
paginate = 5
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
        <BlogPostCard v-for="post of $components?.blog.get('posts', []).data" :key="post.id" :post="post" banner-css="banner-lg" />
        <Pagination v-bind="$components?.blog.get('posts', [])" />
    </template>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/Blog.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';
import Pagination from '@/partials/Pagination.vue';

// Define Component
defineOptions({ layout: BlogLayout });
</script>
