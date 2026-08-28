<template>
    <ul v-if="parent" class="bullet-list list-content">
        <li v-if="next" class="mb-1">
            Next: <Link page="wiki/article" :params="{ fullslug: next.fullslug, id: next.id }">{{ next.title }}</Link>
        </li>
        <li v-if="previous" class="mb-1">
            Previous: <Link page="wiki/article" :params="{ fullslug: previous.fullslug, id: previous.id }">{{ previous.title }}</Link>
        </li>
        <li class="mb-1">
            Return to <Link page="wiki/article" :params="{ fullslug: parent.fullslug, id: parent.id }">{{ parent.title }}</Link>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Link } from '@ratmd/laika';
import { computed } from 'vue';

const props = defineProps<{ article: any }>();
const parent = computed(() => props.article?.parent ?? null);
const siblings = computed<any[]>(() => parent.value?.children ?? []);
const index = computed(() => siblings.value.findIndex((item) => item.id === props.article?.id));
const previous = computed(() => index.value > 0 ? siblings.value[index.value - 1] : null);
const next = computed(() => index.value >= 0 && index.value < siblings.value.length - 1 ? siblings.value[index.value + 1] : null);
</script>
