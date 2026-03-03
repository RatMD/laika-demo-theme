<template>
    <div class="element-user-panel author-panel">
        <div class="row">
            <div class="col-md-8 d-flex">
                <div class="user-avatar">
                    <img v-if="user.avatar" :src="$october.media(user.avatar)" :alt="user.title" />
                    <img v-else :src="randomImage" :alt="user.title" />
                </div>
                <div class="user-details">
                    <h3 class="mb-0">{{ user.title }}</h3>
                    <p>{{ user.role }}</p>
                </div>
            </div>
            <div v-if="!hideAllPosts" class="col-md-4 text-end">
                <a :href="$october.page('blog/author', { slug: user.slug })" class="btn btn-secondary btn-pill btn-sm mt-4">
                    All Posts
                </a>
            </div>
        </div>
        <div class="user-profile">
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        </div>
        <div class="user-social">
            <SocialLinks :links="user.social_links" />
        </div>
    </div>
</template>

<script lang="ts">
export interface ComponentProps {
    user: any;
    hideAllPosts?: boolean;
}
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import SocialLinks from '@/partials/elements/SocialLinks.vue';

// Define Component
const props = defineProps<ComponentProps>();

// States
const randomImage = computed<string>(() => {
    const images = import.meta.glob('@/resources/images/avatars/*.png', {
        eager: true,
        import: 'default'
    }) as Record<string, string>;
    const paths = Object.values(images);
    return paths[Math.floor(Math.random() * paths.length)];
});
</script>
