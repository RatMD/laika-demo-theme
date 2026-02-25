<template>
    <div class="container py-3">
        <h1>{{ props.block.title }}</h1>
        <div class="row">
            <div class="col-md-9" v-html="props.block.content" />
            <div class="col-md-3">
                <img :src="blockImage" alt="" class="img-fluid" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Block } from '@/types';
import { useLaika } from '@ratmd/laika';

// Define Component
const props = defineProps<{ block: Block }>();

// Composables
const { october } = useLaika();

// States
const blockImage = computed<string>(() => {
    if (props.block.image) {
        return october.media(props.block.image);
    } else {
        return october.theme('assets/images/blocks/chart.png');
    }
});
</script>
