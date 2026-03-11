<template>
    <div class="element-user-panel team-panel">
        <div class="user-avatar">
            <img v-if="user.avatar" :src="$october.media(user.avatar)" :alt="user.title" />
            <img v-else :src="randomImage" :alt="user.title" />
        </div>
        <div class="user-details">
            <h3 class="mb-0">{{ user.title }}</h3>
            <p>
                {{ user.role }}
            </p>
        </div>

        <div class="user-social">
            <SocialLinks :links="user.social_links" />
        </div>

        <div class="user-profile">
            <p>{{ user.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export interface ComponentProps {
    user: any;
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
