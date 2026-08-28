<template>
    <div id="result">{{ result }}</div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    result?: string | number;
}>(), {
    result: 75,
});
</script>
