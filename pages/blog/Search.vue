<october>
url = "/blog/search"
layout = "Default.vue"
title = "Search Blog Posts"
meta_title = "Search - Blog"

[collection blogCategories]
handle = "Blog\Category"

[global blogConfig]
handle = "Blog\Config"

[collection blog]
handle = "Blog\Post"
as = posts
paginate = 5
where[] = "searchWhere,$term,title,content"
relations[] = categories
relations[] = author

[resources]
vars[activeNavLink] = 'blog'
</october>

<template>
    <div class="container">
        <header>
            <h1>{{ $components?.blog.get('term') }} - Search Results</h1>
        </header>
        <div class="row">
            <div class="col-md-12">
                <form class="mb-5">
                    <div class="input-group">
                        <div class="form-control-search">
                            <input type="text" name="term" class="form-control" placeholder="Search" :value="$components?.blog.get('term')" />
                            <span class="search-icon"></span>
                        </div>
                    </div>
                </form>

                <template v-if="$components?.blog.get('posts', [])">
                    <div class="blog-featured row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3 pb-5">
                        <BlogPostCard v-for="post of $components?.blog.get('posts', []).data" :key="post.id" :post="post" />
                    </div>
                    <Pagination v-bind="$components?.blog.get('posts', [])" />
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/Default.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';
import Pagination from '@/partials/Pagination.vue';

// Define Component
defineOptions({ layout: DefaultLayout });
</script>
