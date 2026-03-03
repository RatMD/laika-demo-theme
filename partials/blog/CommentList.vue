<template>
    <div class="blog-post-comments">
        <h2 class="mb-5">2 comments</h2>

        <div class="post-comment pb-5">
            <UserPanel :user="{ title:'Andy Anderson', role:'', slug:'', avatar: null }" />
        </div>
        <div class="post-comment">
            <UserPanel :user="{ title:'Mary Williams', role:'', slug:'', avatar: null }" />
        </div>
    </div>
</template>


<script lang="ts" setup>
import UserPanel from '@/partials/elements/UserPanel.vue';
</script>
