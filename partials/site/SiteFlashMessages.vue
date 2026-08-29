<template>
    <div class="laika-flash-messages" aria-live="polite" aria-atomic="true">
        <Flash v-slot="{ type, message }">
            <p class="laika-flash-message" :class="`is-${type}`" role="alert">
                {{ message }}
            </p>
        </Flash>
    </div>
</template>

<script lang="ts" setup>
import { Flash } from '@rat.md/laika';
</script>
