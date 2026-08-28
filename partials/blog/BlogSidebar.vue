<template>
    <div class="sidebar-search">
        <form :action="$october.page('blog/search')" method="get">
            <div class="form-control-search">
                <input type="text" name="term" class="form-control" placeholder="Search" value="" />
                <span class="search-icon"></span>
            </div>
        </form>
    </div>

    <div class="sidebar-about">
        <h3>About Us</h3>
        <div v-if="$components?.blogConfig.get('about_this_blog', '') !== ''" v-html="$components?.blogConfig.get('about_this_blog')" />
        <p v-else class="text-secondary">
            Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
        </p>
    </div>

    <div class="sidebar-social">
        <SocialLinks :links="$components?.blogConfig.get('social_links', [])" :show-rss-link="true" />
    </div>

    <div v-if="$components?.blogCategories" class="sidebar-categories">
        <h3>Categories</h3>
        <ul class="bullet-list">
            <li v-for="category of $components?.blogCategories.get('items')" :key="category.id"
                :class="{ 'active': $shared?.activeBlogCategory == category.slug }">
                <Link page="blog/category" :params="{ slug: category.slug, id: category.id }">
                    {{ category.title }}
                </Link>
            </li>
        </ul>
    </div>

</template>

<script lang="ts" setup>
import { Link } from '@ratmd/laika';
import SocialLinks from '@/partials/elements/SocialLinks.vue';
</script>
