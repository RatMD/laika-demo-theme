<template>
    <nav v-if="props && props.links && props.links.length > 1" aria-label="Pagination">
        <ul class="pagination">
            <li class="page-item first"
                :class="{ disabled: isPrevDisabled }"
                :aria-disabled="isPrevDisabled ? 'true' : 'false'"
                :aria-label="$october.trans('system::lang.pagination.previous')">
                <span v-if="isPrevDisabled" class="page-link" aria-hidden="true">
                    &larr;
                </span>
                <a v-else class="page-link" :href="prevLink.url" rel="prev" :aria-label="$october.trans('system::lang.pagination.previous')">
                    &larr;
                </a>
            </li>

            <li v-for="link in middleLinks" :key="linkKey(link)"
                class="page-item"
                :class="{
                    active: link.active && !isSeparator(link),
                    middle: isSeparator(link),
                    disabled: isSeparator(link) || !link.url
                }"
                :aria-current="link.active && !isSeparator(link) ? 'page' : undefined"
                :aria-disabled="isSeparator(link) || !link.url ? 'true' : 'false'">
                <span v-if="isSeparator(link) || !link.url" class="page-link">
                    {{ formatLabel(link.label) }}
                </span>
                <a v-else class="page-link" :href="link.url">
                    {{ formatLabel(link.label) }}
                </a>
            </li>

            <li class="page-item last"
                :class="{ disabled: isNextDisabled }"
                :aria-disabled="isNextDisabled ? 'true' : 'false'"
                :aria-label="$october.trans('system::lang.pagination.next')">
                <span v-if="isNextDisabled" class="page-link" aria-hidden="true">
                    &rarr;
                </span>
                <a v-else class="page-link" :href="nextLink.url" rel="next" :aria-label="$october.trans('system::lang.pagination.next')">
                    &rarr;
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
export interface PaginationLink {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

export interface ComponentProps {
    current_page: number;
    first_page_url: string | null;
    last_page_url: string | null;
    prev_page_url: string | null;
    next_page_url: string | null;
    links: PaginationLink[];
}
</script>

<script lang="ts" setup>
import { useOctober } from '@ratmd/laika';
import { computed } from 'vue';

// Define Component
const props = defineProps<ComponentProps>();

// Composables
const october = useOctober();

// States
const links = computed(() => props?.links ?? []);
const prevLink = computed<PaginationLink>(() => links.value[0]);
const nextLink = computed<PaginationLink>(() => links.value[links.value.length - 1]);
const isPrevDisabled = computed(() => !prevLink.value || !prevLink.value.url);
const isNextDisabled = computed(() => !nextLink.value || !nextLink.value.url);
const middleLinks = computed<PaginationLink[]>(() => {
    if (!links.value.length) {
        return [];
    }
    return links.value.slice(1, links.value.length - 1);
});

/**
 *
 * @param link
 */
function isSeparator(link: PaginationLink): boolean {
    if (!link.page && (link.label === '...' || link.label === '&hellip;' || link.url === null)) {
        return true;
    } else {
        return false;
    }
};

/**
 *
 * @param label
 */
function formatLabel(label: string): string {
    if (label === 'pagination.previous') {
        return october.trans('system::lang.pagination.previous');
    } else if (label === 'pagination.next') {
        return october.trans('system::lang.pagination.next');
    } else {
        return label;
    }
};

/**
 *
 * @param link
 */
function linkKey(link: PaginationLink): string {
    return `${link.page ?? 'sep'}-${link.label}`;
};
</script>
