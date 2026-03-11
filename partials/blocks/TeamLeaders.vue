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
            <div data-control="team-leaders" class="team-leaders">
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
import UserPanelTeam from '@/partials/elements/UserPanelTeam.vue';

// Define Component
const props = defineProps<{ block: BlockWithMembers }>();
</script>

<style type="css" scoped>
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
