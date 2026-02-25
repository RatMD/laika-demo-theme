<template>
    <div :class="`element-footer ${$shared?.blueFooterStyle ? 'footer-bluezone' : null}`">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="footer-brand">
                        <img src="@/resources/images/logo.svg" alt="October CMS Demo" width="270" />
                    </div>
                    <div class="footer-nav">
                        <SiteNavFooter />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="footer-social">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://dribbble.com/" target="_blank">
                                    <img src="@/resources/images/social-icons-white/dribbble-white.png" alt="Dribbble"  />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://www.linkedin.com/company/october-cms/" target="_blank">
                                    <img src="@/resources/images/social-icons-white/linkedin-white.png" alt="LinkedIn"  />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://twitter.com/octobercms" target="_blank">
                                    <img src="@/resources/images/social-icons-white/twitter-white.png" alt="Twitter" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://www.facebook.com/octobercms" target="_blank">
                                    <img src="@/resources/images/social-icons-white/facebook-white.png" alt="Facebook" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="footer-copyright">
                        <p>&copy; {{ (new Date).getFullYear() }} Your Company Name</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
            <div class="footer-decoration-1"></div>
            <div class="footer-decoration-2"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SiteNavFooter from './SiteNavFooter.vue';
</script>
