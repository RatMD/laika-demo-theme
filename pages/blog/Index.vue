<october>
url = "/blog"
layout = "Blog.vue"
title = "Blog Homepage"

[collection blog]
handle = "Blog\Post"

[collection blogCategories]
handle = "Blog\Category"

[global blogConfig]
handle = "Blog\Config"

[resources]
vars[activeNavLink] = 'blog'
vars[activeBlogCategory] = "{{ :slug }}"
</october>

<template>
    <!--
        {% set posts = blog.paginate(5) %}
        {% set archiveDates = blog
            .selectRaw("count(*) as post_count, published_at_month, published_at_year")
            .groupBy('published_at_month', 'published_at_year').get()
        %}
        {% put pageTitle = blogConfig.blog_name ?: 'Blog' %}

        {% for post in posts %}
            {% partial 'blog/post-card' post=post bannerCss='banner-lg' %}
        {% endfor %}
    -->

    {{ $payload?.components?.blogCategories }}
    <nav class="blog-pagination" aria-label="Pagination">
        {{ posts }}
    </nav>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/Blog.vue';

// Define Component
defineOptions({ layout: BlogLayout });
</script>
