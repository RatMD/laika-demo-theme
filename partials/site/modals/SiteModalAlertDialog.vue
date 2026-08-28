<template>
    <div v-if="open" class="modal d-block" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <p class="modal-title lead">{{ message }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="$emit('confirm')">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ open?: boolean; message?: string }>(), {
    open: false,
    message: '',
});
defineEmits<{ cancel: []; confirm: [] }>();
</script>
