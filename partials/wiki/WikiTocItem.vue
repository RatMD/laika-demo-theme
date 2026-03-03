<template>
    <li :class="[{ collapsible: hasChildren, active: isActive }]">
        <a v-if="hasChildren" :href="`#tocItem${article.id}`" :class="{ 'collapse-caret': true, collapsed: !isActive }" data-bs-toggle="collapse"></a>

        <a class="mb-1 d-block label" :href="$october.page('wiki/article', { fullslug: article.fullslug, id: article.id })">
            {{ article.title }}
        </a>

        <ul v-if="hasChildren" :id="`tocItem${article.id}`" :class="{ 'collapse': true, show: isActive }">
            <WikiTocItem v-for="child in article.children" :key="child.id"
                :article="child"
                :activeSlug="activeSlug" />
        </ul>
    </li>
</template>

<script lang="ts">
export interface Article {
    id: number | string;
    title: string;
    fullslug: string;
    children?: Article[] | null;
}

export interface ComponentProps {
    article: Article;
    activeSlug: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";

// Define Component
const props = defineProps<ComponentProps>();

// States
const hasChildren = computed(() => !!props.article.children && props.article.children.length > 0);
const isActive = computed(() => props.article.fullslug === props.activeSlug);
</script>
