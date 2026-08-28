<template>
    <div id="siteModal" class="modal" tabindex="-1" aria-hidden="true">
        <div id="siteModalContent" class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <slot />
            </div>
        </div>
        <div v-if="loading" class="modal-dialog modal-dialog-centered modal-loading">
            <div class="spinner-border text-light mx-auto"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ loading?: boolean }>(), { loading: false });
</script>

<style lang="css" scoped>
.modal-dialog[data-ajax-updating],
.modal-dialog:not([data-ajax-updating]) + .modal-loading {
    display: none;
}
</style>
