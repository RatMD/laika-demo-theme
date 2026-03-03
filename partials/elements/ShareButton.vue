<template>
    <div class="share-button">
        <a ref="shareButton" class="btn btn-primary btn-pill" href="javascript:;" aria-label="Share">
            Share
        </a>
        <div ref="shareContent" style="display:none;">
            <div class="share-button-popover">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" :href="`http://twitter.com/share?url=${$october.page()}`" target="_blank"><i class="bi-twitter"></i> Twitter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="`https://www.facebook.com/sharer/sharer.php?u=${$october.page()}`" target="_blank"><i class="bi-facebook"></i> Facebook</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="`https://www.linkedin.com/sharing/share-offsite/?url=${$october.page()}`" target="_blank"><i class="bi-linkedin"></i> LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { Popover } from "bootstrap";
import { onMounted, onBeforeUnmount, ref } from "vue";

// States
const shareButton = ref<HTMLElement | null>(null);
const shareContent = ref<HTMLElement | null>(null);
let popoverInstance: Popover | null = null;

// Component mounted
onMounted(() => {
    const el = shareButton.value;
    const content = shareContent.value;
    if (!el || !content) {
        return;
    }

    popoverInstance = new Popover(el, {
        html: true,
        content: content.innerHTML,
        placement: "bottom",
        trigger: "focus",
    });
});

// Component unmounted
onBeforeUnmount(() => {
    if (popoverInstance) {
        popoverInstance.dispose();
        popoverInstance = null;
    }
});
</script>

<style lang="css" scoped>
.share-button {
    margin-top: -5px;
    display: inline-block;

    .btn {
        position: relative;
        padding-left: 47px;
        padding-right: 25px;

        &:before {
            content: "";
            position: absolute;
            left: 17px;
            top: 12px;
            width: 14px;
            height: 14px;
            background-repeat: no-repeat;
            background-size: 14px 14px;
            background-image: url('@/resources/images/icons/icon-share.png');
        }

        &.btn-sm {
            padding-left: 37px;
            padding-right: 15px;

            &:before {
                left: 12px;
                top: 7px;
            }
        }
    }
}
:global(.share-button-popover) {
    padding: 0;
    margin: -1rem;
    overflow: hidden;
    border-radius: 8px;
}
:global(.share-button-popover .nav-link) {
    color: #343F52;
    padding: 10px 15px;
    text-decoration: none;
}
:global(.share-button-popover .nav-link:hover) {
    color: #fff;
    background: var(--bs-brand-primary) !important;
}
:global(.share-button-popover .nav-link > i) {
    margin-right: 5px;
}
</style>
