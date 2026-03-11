<template>
    <div class="block-hero-image" :style="{ backgroundImage: `url('${heroImage}')` }"></div>
    <div class="pb-5"></div>
</template>

<script lang="ts" setup>
import type { Block } from '@/types';
import { useOctober } from '@ratmd/laika';
import { computed } from 'vue';

// Define Component
const props = defineProps<{ block: Block }>();

// Composables
const october = useOctober();

// States
const heroImage = computed<string>(() => {
    if (props.block.image) {
        return october.media(props.block.image);
    } else {
        return october.theme('resources/images/blocks/team.png');
    }
});
</script>

<style lang="css" scoped>
.block-hero-image {
    background-size: 125%;
    background-position: 45% 25%;
    background-repeat: no-repeat;
    height: 520px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        height: 120px;
        width: 100%;
        z-index: 1;
        background-image: url('../../images/blocks/landing-page-slice.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: 100%;
    }
}
</style>
