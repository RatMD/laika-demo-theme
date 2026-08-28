<template>
    <div v-if="open" class="modal d-block" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content" @submit.prevent="confirm">
                <div class="modal-header">
                    <h5 class="modal-title fs-5">{{ message }}</h5>
                </div>
                <div class="modal-body">
                    <p>For your security, please confirm your password to continue.</p>
                    <input v-model="password" name="confirmable_password" type="password" class="form-control" placeholder="Current password" />
                    <p v-if="error" class="text-danger mt-2 mb-0">{{ error }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
                    <button type="submit" class="btn btn-primary" :disabled="pending">Confirm</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useOctober } from '@ratmd/laika';
import { ref } from 'vue';

withDefaults(defineProps<{ open?: boolean; message?: string }>(), {
    open: false,
    message: 'Confirm password',
});
const emit = defineEmits<{ cancel: []; confirmed: [] }>();
const october = useOctober();
const password = ref('');
const pending = ref(false);
const error = ref('');

async function confirm(): Promise<void> {
    pending.value = true;
    error.value = '';
    try {
        const response = await october.request('onConfirmPassword', {
            data: { confirmable_password: password.value },
        });
        if (!response.ok) {
            error.value = response.message ?? 'Password confirmation failed.';
            return;
        }
        password.value = '';
        emit('confirmed');
    } finally {
        pending.value = false;
    }
}
</script>
