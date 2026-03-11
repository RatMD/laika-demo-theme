<october>
url = "/about"
layout = "Default.vue"
title = "About Page"
meta_title = "{{ aboutpage.title }}"

[section aboutpage]
eager[] = blocks
handle = "Page\About"

[resources]
vars[activeNavLink] = 'about'
</october>

<template>
    <Teleport to="#layout-header">
        <div class="container">
            <div class="header-extra text-center">
                <h1 class="mb-4">Hello! This is October CMS!</h1>
                <p class="lead">A company proving that making websites is not rocket science.</p>
            </div>
        </div>
    </Teleport>

    <main class="header-flush">
        <template v-for="(block, idx) of $components?.aboutpage.get('blocks', [])" :key="idx">
            <DetailedBlock v-if="block.content_group == 'detailed_block'" :block="block" />
            <ImageSlice v-if="block.content_group == 'image_slice'" :block="block" />
            <ParagraphBlock v-if="block.content_group == 'paragraph_block'" :block="block" />
            <ScoreboardMetrics v-if="block.content_group == 'scoreboard_metrics'" :block="block" />
            <TeamLeaders v-if="block.content_group == 'team_leaders'" :block="block" />
        </template>
    </main>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/Default.vue';
import DetailedBlock from '@/partials/blocks/DetailedBlock.vue';
import ImageSlice from '@/partials/blocks/ImageSlice.vue';
import ParagraphBlock from '@/partials/blocks/ParagraphBlock.vue';
import ScoreboardMetrics from '@/partials/blocks/ScoreboardMetrics.vue';
import TeamLeaders from '@/partials/blocks/TeamLeaders.vue';

// Define Component
defineOptions({ layout: DefaultLayout });
</script>
