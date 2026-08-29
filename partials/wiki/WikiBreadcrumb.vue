<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
            <li v-for="parent in parents" :key="parent.id" class="breadcrumb-item">
                <Link page="wiki/article" :params="{ fullslug: parent.fullslug, id: parent.id }">
                    {{ parent.title }}
                </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import { Link } from '@rat.md/laika';
import { computed } from 'vue';

const props = defineProps<{ article: any }>();
const parents = computed<any[]>(() => {
    const result: any[] = [];
    let parent = props.article?.parent;
    while (parent) {
        result.unshift(parent);
        parent = parent.parent;
    }
    return result;
});
</script>
