<october>
title = "Components Demo"
url = "/components"
layout = "Default.vue"
meta_title = "CMS Component Demo"

[demoTodo]
max = 3
addDefault = 1

[resources]
vars[activeNavLink] = 'components'
vars[blueFooterStyle] = 1
</october>

<template>
    <div class="page-components">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="text-center py-3">
                        <h1 class="mb-4">CMS Component Demo</h1>
                        <p class="lead">Plugins can provide CMS components, simple building blocks that can enrich pages, layouts, and partials. Check out the To Do example below.</p>
                    </div>
                </div>
                <div class="col-md-6 offset-md-3">
                    <div class="plugins-component-container pb-5">
                        <PageComponent name="demoTodo" />
                    </div>
                </div>
            </div>
        </div>

        <div class="explanation">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <h3>Vue markup for that example</h3>
                        <div class="code-block mb-4">
                            <pre>&lt;PageComponent name="demoTodo" /&gt;</pre>
                        </div>
                        <p>The component still runs through October CMS. LAIKA transports its properties and native rendered markup to Vue, and bridges any <code>data-request</code> handlers contained in that markup.</p>
                        <div class="py-4">
                            <p>
                                <a href="https://docs.octobercms.com/3.x/cms/themes/components.html" target="_blank" class="btn btn-primary btn-lg btn-pill">
                                    Learn more about CMS Components
                                </a>
                            </p>
                        </div>
                        <div class="explanation-decoration-1"></div>
                        <div class="explanation-decoration-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.page-components {
    .panel {
        margin-bottom: 27px;
        background-color: #fff;

        &.panel-default {
            overflow: hidden;
            margin-top: 40px;
            border: 2px solid var(--bs-brand-accent);
            border-radius: 9px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);

            .panel-heading {
                padding: 15px;
                color: #333;
                background: transparent;
                border-bottom: 1px solid #ddd;

                h3 {
                    position: relative;
                    padding-left: 32px;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: 18px;

                    &::before {
                        position: absolute;
                        top: -1px;
                        left: 0;
                        width: 24px;
                        height: 24px;
                        content: "";
                        background: url("../assets/images/icons/icon-todo.png") no-repeat;
                        background-size: 24px 24px !important;
                    }
                }
            }

            .panel-body {
                padding: 0;

                input.form-control {
                    padding-left: 17px;
                    border: none;
                    box-shadow: none;
                }

                input.form-control,
                button.btn {
                    height: 41px;
                }

                .input-group-btn {
                    margin-left: 0 !important;
                }

                button.btn.btn-primary {
                    padding-right: 45px;
                    padding-left: 20px;
                    color: var(--bs-body-color);
                    background: transparent;
                    border: none;
                    outline: none;
                    box-shadow: none;

                    &::before {
                        position: absolute;
                        top: 9px;
                        right: 9px;
                        width: 23px;
                        height: 23px;
                        content: "";
                        background: url("../assets/images/icons/icon-keyboard-return.png") no-repeat;
                        background-size: 23px 23px !important;
                    }
                }
            }

            .list-group {
                border-radius: 0;

                li {
                    position: relative;
                    padding: 10px 15px 10px 37px;
                    border-right: none;
                    border-left: none;

                    &:last-child {
                        border-bottom: none;
                    }

                    button {
                        position: absolute;
                        top: 16px;
                        left: 15px;
                        width: 15px;
                        height: 15px;
                        font: 0/0 a;
                        color: transparent;
                        text-shadow: none;
                        background-color: transparent;
                        border: 1px solid #bdc3c7;
                        border-radius: 100%;
                        opacity: 1;
                        outline: none !important;
                    }
                }
            }
        }
    }

    .explanation {
        position: relative;
        z-index: 1;
        padding: 90px 0 70px;
        overflow: hidden;
        background: #f6f2ff;

        > .container {
            position: relative;
        }

        h3 {
            margin-bottom: 45px;
            font-size: 26px;
        }

        p.lead {
            margin-bottom: 40px;
            font-size: 20px;
            font-weight: 400;
        }

        .explanation-decoration-1,
        .explanation-decoration-2 {
            position: absolute;
            z-index: -1;
            display: block;
            content: "";
            background-color: #fff;
            border-radius: 100%;
            opacity: 0.5;
        }

        .explanation-decoration-1 {
            top: -140px;
            left: -140px;
            width: 321px;
            height: 321px;
        }

        .explanation-decoration-2 {
            top: -180px;
            right: -165px;
            width: 380px;
            height: 380px;
        }
    }
}
</style>

<script lang="ts" setup>
import { PageComponent } from '@ratmd/laika';
import DefaultLayout from '@/layouts/Default.vue';

defineOptions({ layout: DefaultLayout, inheritAttrs: false });

defineProps<{ activeNavLink?: string }>();
</script>
