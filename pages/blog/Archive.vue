<october>
url = "/blog/archive/:year|(^[0-9]{4}$)/:month|(^0?[1-9]$)|(^1[0-2]$)"
title = "Blog Archive"
layout = "Blog.vue"

[collection blog]
handle = "Blog\Post"
as = posts
paginate = 5
whereParams[year] = "{{ :year }}"
whereParams[month] = "{{ :month }}"
where[] = "where,published_at_year,$year"
where[] = "where,published_at_month,$month"
relations[] = categories
relations[] = author

[resources]
vars[activeNavLink] = 'blog'
</october>

<template>
    {{ $october.setPlaceholder('pageTitle', `Articles from ${$components?.blog.get('month')} / ${$components?.blog.get('year')}`) }}
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
