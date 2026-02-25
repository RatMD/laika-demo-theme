<template>
    <div class="container py-3">
        <div class="row">
            <div class="col-md-6 pt-5">
                <h2 class="my-4">{{ props.block.title }}</h2>
                <div v-html="props.block.content" />

                <template v-if="props.block.list_items">
                    <ul class="list-inline list-with-ticks py-2">
                        <li v-for="(item, idx) in props.block.list_items" :key="idx" class="list-inline-item">
                            {{ item.text }}
                        </li>
                    </ul>
                </template>

                <p>
                    <a :href="props.block.button_url" class="btn btn-primary btn-lg btn-pill">
                        {{ props.block.button_text }}
                    </a>
                </p>
            </div>
            <div class="col-md-6">
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
        return october.theme('assets/images/blocks/team.png');
    }
});
</script>
