<template>
    <div v-if="images.length" :id="carouselId" class="carousel slide control-gallery-slider" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="image.source" :class="['carousel-item', { active: index === 0 }]">
                <a :href="image.source" target="_blank">
                    <img :src="image.resized" class="d-block w-100" :alt="image.title" />
                </a>
                <div v-if="image.title || image.description" class="carousel-caption d-none d-md-block">
                    <h3 v-if="image.title">{{ image.title }}</h3>
                    <p v-if="image.description">{{ image.description }}</p>
                </div>
            </div>
        </div>
        <button v-if="images.length > 1" class="carousel-control-prev" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button v-if="images.length > 1" class="carousel-control-next" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { useOctober } from '@rat.md/laika';
import { computed, useId } from 'vue';

interface GalleryImage {
    path?: string;
    title?: string;
    description?: string;
}

const props = withDefaults(defineProps<{
    gallery?: Array<GalleryImage | string>;
    width?: number;
    height?: number;
}>(), {
    gallery: () => [],
    width: 640,
    height: 640,
});

const october = useOctober();
const carouselId = `gallery-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
const fallbackImages = Object.values(import.meta.glob('@/assets/images/stock/*.png', {
    eager: true,
    import: 'default',
})) as string[];

const images = computed(() => {
    const sourceImages = props.gallery.length ? props.gallery : fallbackImages;
    return sourceImages.map((image) => {
        const rawPath = typeof image === 'string' ? image : (image.path ?? '');
        const source = rawPath.startsWith('http') || rawPath.startsWith('/themes/')
            ? rawPath
            : october.media(rawPath);
        return {
            source,
            resized: october.resize(source, props.width, props.height, { extension: 'png', mode: 'crop' }),
            title: typeof image === 'string' ? '' : (image.title ?? ''),
            description: typeof image === 'string' ? '' : (image.description ?? ''),
        };
    });
});
</script>

<style lang="css" scoped>
.control-gallery-slider {
    margin-right: -10px;
    margin-left: -10px;

    .carousel-item {
        padding: 10px;

        a {
            display: block;
            overflow: hidden;
            border-radius: 6px;
            outline: none;
            box-shadow: 0 0 10px rgba(129, 138, 166, 0.21);
        }
    }
}
</style>
