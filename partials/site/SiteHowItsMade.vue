<template>
    <div ref="howItsMadeElement" v-if="$components?.backendLink && howItsMade"class="how-its-made init">
        <div>
            <p>
                Wondering how this page is made? View the
                <a :href="`${$components?.backendLink.get('backendUrl')}/editor?open=${howItsMade.template}`" target="_blank">CMS Template</a>

                <template v-if="howItsMade.blueprint">
                    •  <a :href="`${$components?.backendLink.get('backendUrl')}/editor?open=${howItsMade.blueprint}`" target="_blank">Tailor Blueprint</a>
                </template>
                <template v-if="howItsMade.content">
                    •  <a :href="`${$components?.backendLink.get('backendUrl')}/editor?open=${howItsMade.content}`" target="_blank">Tailor Content</a>
                </template>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
interface HowItsMadeObject {
    template: string|null;
    blueprint?: string;
    content?: string;
}
</script>

<script lang="ts" setup>
import { usePage } from '@ratmd/laika';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

// Composables
const page = usePage();

// Component Mounted
onMounted(() => {
    setTimeout(() => {
        howItsMadeElement?.value?.classList.remove('init');
    }, 1);
});

// Component Mounted
onBeforeUnmount(() => {
    howItsMadeElement?.value?.classList.add('init');
});

// States
const howItsMadeElement = ref<HTMLElement>();
const howItsMade = computed<HowItsMadeObject|null>(() => {
    switch(page.value?.component) {
        case '404.vue':
            return { template: 'cms:cms-page:404.vue' };
        case 'Error.vue':
            return { template: 'cms:cms-page:Error.vue' };
        case 'About.vue':
            return {
                template: 'cms:cms-page:About.vue',
                blueprint: 'tailor:tailor-blueprint:landing/landing-page.yaml',
                content: 'entries/page_about',
            };
        case 'Ajax.vue':
            return { template: 'cms:cms-page:Ajax.vue' };
        case 'Components.vue':
            return { template: 'cms:cms-page:Components.vue' };
        case 'Contact.vue':
            return { template: 'cms:cms-page:Contact.vue' };
        case 'Index.vue':
            return { template: 'cms:cms-page:Index.vue' };
        case 'Blog/Archive.vue':
            return {
                template: 'cms:cms-page:blog/Archive.vue',
                blueprint: 'tailor:tailor-blueprint:blog/post.yaml',
                content: 'entries/blog_post',
            };
        case 'Blog/Author.vue':
            return {
                template: 'cms:cms-page:blog/Author.vue',
                blueprint: 'tailor:tailor-blueprint:blog/author.yaml',
                content: 'entries/blog_author/' + 'author.id',
            };
        case 'Blog/Category.vue':
            return {
                template: 'cms:cms-page:blog/Category.vue',
                blueprint: 'tailor:tailor-blueprint:blog/category.yaml',
                content: 'entries/blog_category/' + 'category.id',
            };
        case 'Blog/Index.vue':
            return {
                template: 'cms:cms-page:blog/Index.vue',
                blueprint: 'tailor:tailor-blueprint:blog/post.yaml',
                content: 'entries/blog_post',
            };
        case 'Blog/Post.vue':
            return {
                template: 'cms:cms-page:blog/Post.vue',
                blueprint: 'tailor:tailor-blueprint:blog/post.yaml',
                content: 'entries/blog_post/' + 'blog.id',
            };
        case 'Blog/Search.vue':
            return {
                template: 'cms:cms-page:blog/Search.vue',
                blueprint: 'tailor:tailor-blueprint:blog/post.yaml',
                content: 'entries/blog_post',
            };
        case 'Wiki/Article.vue':
            return {
                template: 'cms:cms-page:wiki/Article.vue',
                blueprint: 'tailor:tailor-blueprint:wiki/article.yaml',
                content: 'entries/page_article/' + 'wiki.id',
            };
        case 'Wiki/Index.vue':
            return {
                template: 'cms:cms-page:wiki/Index.vue',
                blueprint: 'tailor:tailor-blueprint:wiki/article.yaml',
                content: 'entries/page_article',
            };
        case 'Wiki/Search.vue':
            return {
                template: 'cms:cms-page:wiki/Search.vue',
                blueprint: 'tailor:tailor-blueprint:wiki/article.yaml',
                content: 'entries/page_article',
            };
    }
    return null;
});
</script>

<style lang="css" scoped>
.how-its-made {
    position: fixed;
    bottom: 50px;
    width: 800px;
    max-width: 100%;
    z-index: 3;
    padding: 0 30px;
    margin: 0 0 0 50%;
    transform: translateX(-50%) scale(1);
    background-color: transparent;
    transition: all 0.4s cubic-bezier(.25,-0.59,.35,1.58);

    &.init {
        opacity: 0;
        transform: translateX(-50%) scale(0.3);
    }

    > div {
        background-color: #FFE297;
        box-shadow: 14px -8px 52px rgba(129, 138, 166, 0.42);
        text-align: center;
        padding: 10px 20px;
        border-radius: 14px;

        p {
            margin-bottom: 0;

            a {
                color: inherit;
                text-decoration: underline;
            }
        }
    }
}

:global(html[data-turbo-preview] div.how-its-made) {
    opacity: 0;
    transform: translateX(-50%) scale(0.3);
}
</style>
