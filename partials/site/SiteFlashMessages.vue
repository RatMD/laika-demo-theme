<template>
    <Flash v-slot="{ type, message }">
        <p data-control="flash-message" :data-type="type" data-interval>{{ message }}</p>
    </Flash>
</template>

<script lang="ts" setup>
import { Flash } from '@ratmd/laika';
</script>
