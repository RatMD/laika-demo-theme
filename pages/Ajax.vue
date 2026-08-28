<october>
title = "AJAX Framework"
url = "/ajax"
layout = "Default.vue"
meta_title = "AJAX Framework"

[resources]
vars[blueFooterStyle] = 1
</october>

<php>
function onTest(): void
{
    $value1 = (float) input('value1', 0);
    $value2 = (float) input('value2', 0);
    $operation = (string) input('operation', '*');

    $this['result'] = match ($operation) {
        '+' => $value1 + $value2,
        '-' => $value1 - $value2,
        '*' => $value1 * $value2,
        default => $value2 !== 0.0 ? round($value1 / $value2, 2) : 'NaN',
    };
}
</php>

<template>
    <div class="page-ajax">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="text-center py-3">
                        <h1 class="mb-4">AJAX Framework</h1>
                        <p class="lead">LAIKA connects Vue forms to native October CMS AJAX handlers. The calculator below executes the PHP <code>onTest</code> handler from this Vue page and refreshes its reactive page data without a full navigation.</p>
                    </div>
                </div>
                <div class="col-md-6 offset-md-3">
                    <div class="ajax-demo-container pb-5">
                        <div class="panel">
                            <div class="row">
                                <div class="col-lg-9 control-panel">
                                    <div class="panel-body">
                                        <form role="form" class="form-inline" data-request="onTest">
                                            <div class="form-group">
                                                <input type="text" class="form-control" value="15" name="value1" />
                                            </div>
                                            <div class="form-group operation-buttons">
                                                <label><input type="radio" name="operation" value="+" /><span>+</span></label>
                                                <label><input type="radio" name="operation" value="-" /><span>-</span></label>
                                                <label><input type="radio" name="operation" value="*" checked /><span>*</span></label>
                                                <label><input type="radio" name="operation" value="/" /><span>/</span></label>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" value="5" name="value2" />
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-primary">=</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-3 ps-0">
                                    <CalcResult :result="result" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="explanation">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <h3>The Vue form</h3>
                        <p>The familiar <code>data-request="onTest"</code> attribute is handled by LAIKA's delegated October AJAX bridge.</p>
                        <div class="code-block collapsed-code-block" :class="{ collapsed: !expandedForm }">
                            <pre>{{ formExample }}</pre>
                            <button type="button" class="expand-code" @click="expandedForm = !expandedForm">
                                {{ expandedForm ? 'Collapse' : 'Expand' }}
                            </button>
                        </div>

                        <h3>The Vue result component</h3>
                        <p>The response includes the changed October page variables. Vue receives the refreshed payload and updates the result component reactively, so no server-rendered HTML fragment is required.</p>
                        <div class="code-block">
                            <pre>{{ resultExample }}</pre>
                        </div>

                        <h3>The <code>&lt;php&gt;</code> handler</h3>
                        <p>The PHP code is removed from the browser bundle and executed by October CMS in the normal page lifecycle.</p>
                        <div class="code-block collapsed-code-block" :class="{ collapsed: !expandedHandler }">
                            <pre data-language="php">{{ handlerExample }}</pre>
                            <button type="button" class="expand-code" @click="expandedHandler = !expandedHandler">
                                {{ expandedHandler ? 'Collapse' : 'Expand' }}
                            </button>
                        </div>

                        <div class="explanation-decoration-1"></div>
                        <div class="explanation-decoration-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePayload } from '@ratmd/laika';
import { computed, ref } from 'vue';
import DefaultLayout from '@/layouts/Default.vue';
import CalcResult from '@/partials/CalcResult.vue';

defineOptions({ layout: DefaultLayout });

const { page } = usePayload<{ result?: string | number }>();
const expandedForm = ref(false);
const expandedHandler = ref(false);
const result = computed<string | number>(() => {
    const value = page.value?.props?.result;

    return typeof value === "string" || typeof value === "number" ? value : 75;
});

const formExample = `<form data-request="onTest">
    <input name="value1" value="15">
    <input name="value2" value="5">
    <button type="submit">=</button>
</form>`;
const resultExample = '<CalcResult :result="result" />';
const handlerExample = `function onTest(): void
{
    $value1 = (float) input('value1', 0);
    $value2 = (float) input('value2', 0);
    $this['result'] = $value1 * $value2;
}`;
</script>

<style lang="css" scoped>
.page-ajax {
    .panel {
        margin-bottom: 27px;
        overflow: hidden;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);

        @media (min-width: 992px) {
            .control-panel {
                padding-right: 0 !important;
            }
        }
    }

    .panel-body {
        display: table;
        width: 100%;
        padding: 25px;

        form {
            display: table-row;

            .form-group {
                display: table-cell;
                padding-right: 10px;
                margin-bottom: 15px;
                vertical-align: top;
                white-space: nowrap;

                &:last-child {
                    width: 41px;
                    padding-right: 0;

                    button {
                        width: 41px;
                        height: 41px;
                        background: var(--bs-brand-accent);
                    }
                }

                &.operation-buttons {
                    width: 100px;
                    text-align: center;

                    label {
                        position: relative;
                        display: inline-block;
                        width: 41px;
                        height: 41px;
                        margin: 0 10px 0 0;
                        line-height: 41px;
                        text-align: center;
                        vertical-align: top;
                        cursor: pointer;

                        &:last-child {
                            margin-right: 0;
                        }

                        span {
                            position: absolute;
                            display: block;
                            width: 100%;
                            height: 100%;
                            background: #ecf0f1;
                            border-radius: var(--bs-border-radius);
                        }

                        input {
                            display: none;

                            &:checked + span {
                                color: white;
                                background-color: var(--bs-brand-accent);
                            }
                        }
                    }
                }
            }

            @media (max-width: 767px) {
                .form-group {
                    display: block;
                    width: 100% !important;
                    padding-right: 0;

                    &:last-child button {
                        width: 100%;
                    }
                }
            }
        }

        input.form-control {
            display: block;
            width: 100%;
            height: 41px;
            font-size: 14px;
            text-align: right;
            background-color: #ecf0f1;
            border: none;
            box-shadow: none;
        }
    }

    #result {
        padding: 0 15px;
        overflow: hidden;
        font-size: 54px;
        font-weight: bold;
        color: white;
        text-align: center;
        text-overflow: ellipsis;
        background: var(--bs-brand-accent);
    }

    .explanation {
        position: relative;
        z-index: 1;
        padding: 50px 0 70px;
        overflow: hidden;
        background: #f6f2ff;

        > .container {
            position: relative;
        }

        h3 {
            margin: 60px 0 20px;
            font-size: 26px;
        }

        .explanation-decoration-1,
        .explanation-decoration-2 {
            position: absolute;
            z-index: -1;
            display: block;
            content: '';
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
