<template>
    <div class="block-team-leaders">
        <div class="container py-3">
            <div class="text-center">
                <h2 class="pt-5">Meet the Team!</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
        </div>
    </div>

    <div class="container py-4">
        <div class="block-team-leaders">
            <div ref="sliderElement" class="team-leaders">
                <div v-for="(member, idx) of (block.members||[])" :key="idx" class="team-member-container">
                    <div class="team-member card">
                        <div class="card-body">
                            <UserPanelTeam :user="member" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { BlockWithMembers } from '@/types';
import 'slick-carousel';
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import UserPanelTeam from '@/partials/elements/UserPanelTeam.vue';

// Define Component
const props = defineProps<{ block: BlockWithMembers }>();

const sliderElement = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();

    if (!sliderElement.value) {
        return;
    }

    $(sliderElement.value).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

onBeforeUnmount(() => {
    if (sliderElement.value && $(sliderElement.value).hasClass('slick-initialized')) {
        $(sliderElement.value).slick('unslick');
    }
});
</script>

<style lang="css">
.block-team-leaders {
    position: relative;

    .team-leaders {
        white-space: nowrap;

        .slick-list {
            padding: 30px;
            margin-top: -30px;
            margin-bottom: -30px;
            margin-left: -30px;
            margin-right: -30px;
        }

        .slick-arrow {
            display: none!important;
        }

        .team-member-container {
            padding: 0 15px;

            .team-member {
                white-space: normal;
            }
        }

        .slick-dots {
            li.slick-active button:before {
                font-size: 10px;
            }
        }
    }
}
</style>
