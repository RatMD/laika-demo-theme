<template>
    <div :class="['col', props.cssClass]">
        <div class="card card-post mb-5">
            <div v-if="props.post.banner" :class="['card-banner', props.bannerCss]" :style="{ backgroundImage: `url('${props.post.banner.path}')` }"></div>
            <div v-else :class="['card-banner', props.bannerCss]" :style="{ backgroundImage: `url('${randomImage}')` }"></div>

            <div class="card-body">
                <template v-if="props.post.categories">
                    <div class="blog-post-categories">
                        <ul class="list-inline">
                            <li v-for="category in post.categories" :key="category.id" class="list-inline-item">
                                &mdash; <a :href="$october.page('blog/category', { slug: category.slug, id: category.id })" class="position-relative z-3">{{ category.title }}</a>
                            </li>
                        </ul>
                    </div>
                </template>

                <h4 class="position-relative card-title">
                    <a :href="$october.page('blog/post', { slug: post.slug, id: post.id })" class="stretched-link">
                        {{ props.post.title }}
                    </a>
                </h4>

                <div class="featured-text">
                    <p>{{ props.post.featured_text }}</p>
                </div>
            </div>

            <div class="card-footer">
                <div class="card-meta">
                    <div class="meta-item meta-date text-icon text-icon-date" v-dayjs="props.post.published_at_date">
                        D MMM. YYYY
                    </div>
                    <template v-if="props.post.author">
                        <div class="meta-item meta-divider">
                            &bull;
                        </div>
                        <div class="meta-item meta-author text-icon text-icon-author">
                            By <a :href="$october.page('blog/author', { slug: post.author.slug })" class="position-relative z-3 ">
                                {{ post.author.title || '' }}
                            </a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export interface ComponentProps {
    post: any;
    cssClass?: string;
    bannerCss?: string;
}
</script>

<script lang="ts" setup>
import { computed } from 'vue';

// Define Component
const props = defineProps<ComponentProps>();

// States
const randomImage = computed<string>(() => {
    const images = import.meta.glob('@/resources/images/stock/*.png', {
        eager: true,
        import: 'default'
    }) as Record<string, string>;
    const paths = Object.values(images);
    return paths[Math.floor(Math.random() * paths.length)];
});
</script>
