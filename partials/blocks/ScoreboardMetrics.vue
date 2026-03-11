<template>
    <div class="block-scoreboard-metrics mt-3">
        <div class="container">
            <div class="metrics d-flex justify-content-between">
                <div v-for="(metric, idx) in (props.block.metrics||[])" :key="idx" class="metric">
                    <img :src="october.theme('resources/images/icons/icon-' + (metric.icon || 'notepad') + '.png')" width="42" alt="" />
                    <h3>{{ metric.number }}</h3>
                    <p>{{ metric.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="pb-3"></div>
</template>

<script lang="ts" setup>
import type { BlockWithMetrics } from '@/types';

// Define Component
const props = defineProps<{ block: BlockWithMetrics }>();
</script>

<style lang="css" scoped>
.block-scoreboard-metrics {
    background: linear-gradient(102.01deg, #eff4fd 0.3%, #f6f2ff 106.31%);

    .metrics {
        .metric {
            padding: 60px 0;
            h3 {
                font-weight: 700;
                font-size: 40px;
                margin-bottom: 5px;
            }

            text-align: center;
        }
    }
}
</style>
