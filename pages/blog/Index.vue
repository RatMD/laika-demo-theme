<october>
url = "/blog"
layout = "Blog.vue"
title = "Blog"

[collection blog]
handle = "Blog\Post"
as = posts
paginate = 5
relations[] = categories
relations[] = author
</october>

<template>
    {{ $october.setPlaceholder('pageTitle', $components?.blogConfig.get('blog_name') || 'Blog') }}
    <template v-if="$components?.blog.get('posts', [])">
        <BlogPostCard v-for="post of $components?.blog.get('posts', [] as any).data" :key="post.id" :post="post" banner-css="banner-lg" />
        <Pagination v-bind="$components?.blog.get('posts', [] as any)" />
    </template>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/Blog.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';
import Pagination from '@/partials/Pagination.vue';

// Define Component
defineOptions({ layout: BlogLayout });
</script>
