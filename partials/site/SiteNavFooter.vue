<template>
    <div class="row gx-0">
        <div v-for="item of $components?.footerNav?.get('items')" :key="item.id" class="col-md-4 mb-3">
            <ul class="nav flex-column">
                <li class="nav-item nav-item-header">
                    <component :is="item.reference ? 'a' : 'span'"
                        :class="item.reference ? 'nav-link' : 'nav-title'"
                        :href="item.reference ? $october.link(item.reference) : void 0"
                        :target="item.is_external == '1' ? '_blank' : '_self'">
                        {{ item.title }}
                    </component>
                </li>
                <template v-if="item.children">
                    <li class="nav-item" v-for="child of item.children">
                        <a class="nav-link" :href="child.reference ? $october.link(child.reference) : void 0" :target="child.is_external == '1' ? '_blank' : '_self'">
                            {{ child.title }}
                        </a>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
