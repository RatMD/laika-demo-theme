<template>
    <div class="element-social-links">
        <ul class="nav">
            <li v-for="(link, idx) in props.links" :key="idx" class="nav-item">
                <a class="nav-link" aria-current="page" :href="link.url" target="_blank" rel="nofollow">
                    <img :src="$october.theme(`assets/images/social-icons/${link.platform}.png`)" :alt="link.title"  />
                </a>
            </li>
            <li v-if="props.showRssLink" class="nav-item">
                <a class="nav-link" aria-current="page" :href="$october.page('blog/rss')" target="_blank">
                    <img src="@/assets/images/social-icons/rss.png" alt="RSS Feed"  />
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export interface SocialLink {
    url: string;
    platform: string;
    title?: string;
}

export interface ComponentProps {
    links?: SocialLink[];
    showRssLink?: boolean;
}
</script>

<script lang="ts" setup>
const props = defineProps<ComponentProps>();
</script>

<style lang="css" scoped>
.element-social-links {
    .nav {
        .nav-item {
            &:first-child > a {
                padding-left: 0;
            }

            > a {
                padding-right: 8px;
                padding-left: 8px;
            }

            img {
                height: 20px;
            }

            i {
                position: relative;
                top: 2px;
            }
        }
    }
}
</style>
