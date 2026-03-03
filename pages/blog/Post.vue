<october>
url = "/blog/post/:slug/:id"
layout = "Blog.vue"
title = "Display a Blog Post"
meta_title = "{{ blog.title }} - Blog"

[section post]
handle = "Blog\Post"
identifier = "id"
relations[] = author
relations[] = author.social_links
relations[] = banner
relations[] = categories

[collection blogCategories]
handle = "Blog\Category"

[resources]
vars[activeNavLink] = 'blog'
</october>

<template>
    <article class="card card-post card-primary">
        <div v-if="post.banner" class="card-banner banner-lg" :style="{ backgroundImage: `url('${post.banner.path}')` }"></div>
        <div v-else class="card-banner banner-lg" :style="{ backgroundImage: `url('${randomImage}')` }"></div>

        <div class="card-body card-lg">
            <h1 class="card-title">
                {{ post.title }}
            </h1>

            <template v-if="post.entry_type">
                {{ $october.md(post.content) }}
            </template>
            <template v-else>
                <div class="" v-html="post.content" />
            </template>

            <div class="blog-post-gallery">
                {% partial 'controls/gallery-slider' gallery=post.gallery %}
            </div>

            <div class="row pt-3">
                <div class="col-md-8">
                    <div class="card-meta">
                        <div v-if="post.categories" class="meta-item meta-categories">
                            Posted in
                            <a v-for="category in post.categories" :key="category.id"
                                :href="$october.page('blog/category', { slug: category.slug, id: category.id })">
                                {{ category.title }}
                            </a>
                        </div>
                        <div class="meta-item px-2">
                            &bull;
                        </div>
                        <div class="meta-item text-icon text-icon-date" v-dayjs="post.published_at_date">
                            D. MM YYYY
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-end">
                    <div class="share-button">
                        <ShareButton />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="post.author" class="card-divider"></div>
        <div v-if="post.author" class="card-body card-lg">
            <UserPanelAuthor :user="post.author" />
        </div>

        <div class="card-divider"></div>
        <div class="card-body card-lg">
            <CommentList />
        </div>

        <div class="card-divider"></div>
        <div class="card-body card-lg">
            <CommentForm />
        </div>
    </article>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/Blog.vue';
import CommentForm from '@/partials/blog/CommentForm.vue';
import CommentList from '@/partials/blog/CommentList.vue';
import ShareButton from '@/partials/elements/ShareButton.vue';
import UserPanelAuthor from '@/partials/elements/UserPanelAuthor.vue';
import { useComponent } from '@ratmd/laika';
import { computed } from 'vue';

// Define Component
defineOptions({ layout: BlogLayout });

// Composable
const postItem = useComponent('post');

// States
const post = computed<any>(() => postItem.props || {});
const randomImage = computed<string>(() => {
    const images = import.meta.glob('@/resources/images/stock/*.png', {
        eager: true,
        import: 'default'
    }) as Record<string, string>;
    const paths = Object.values(images);
    return paths[Math.floor(Math.random() * paths.length)];
});
</script>
