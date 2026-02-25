<october>
title = "Demonstration"
url = "/"
layout = "Home.vue"
meta_title = "Welcome"

[collection blog]
handle = "Blog\Post"
as = posts
relations[] = categories
relations[] = author
</october>

<template>
    <div class="page-index">
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="jumbotron-intro">
                            <h1>Welcome to October CMS!</h1>
                            <p class="lead">
                                This is the October CMS demo theme that explores the core features. You can use it as a foundation for your new website.
                            </p>
                            <p>
                                <a v-if="$components?.backendLink" :href="$components?.backendLink.get('backendUrl')" target="backend" class="btn btn-outline-light btn-pill">
                                    Explore the Backend Area
                                </a>
                                <a v-else href="https://octobercms.com/features" target="_blank" class="btn btn-outline-light btn-pill">
                                    Explore the Platform Features
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="jumbotron-product">
                            <img src="@/resources/images/homepage/header-image.png" class="img-fluid" alt="Product Shot" />
                        </div>
                    </div>
                </div>
                <div class="jumbotron-decoration-1"></div>
                <div class="jumbotron-decoration-2"></div>
            </div>
        </div>

        <div class="intro">
            <div class="container">
                <img src="@/resources/images/logo-leaf.png" class="img-leaf" alt="October CMS" />
                <h2>About This Page</h2>
                <p class="lead">
                    This page demonstrates the basic CMS features. Usually each page built with October CMS is a combination of a layout, page, partials and content blocks, although in simple cases you can just use a page without anything else.
                </p>
            </div>
        </div>

        <div class="feature">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-1">
                        <div class="feature-content">
                            <div><div class="feature-pill"><span>CMS Feature</span></div></div>
                            <h3>Layouts</h3>
                            <p>Layouts define the page scaffold. Layout files include everything that repeats on each page, such as the HTML, HEAD and BODY tags, CSS and JavaScript references. The page menu and footer in the Demo theme are defined in the layout as well. Layouts are optional — you can define everything right in a page file.</p>
                            <a href="https://docs.octobercms.com/3.x/cms/themes/layouts.html" target="_blank" class="btn btn-outline-primary btn-pill">Learn more about Layouts</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="feature-image">
                            <img src="@/resources/images/homepage/layouts-image.png" class="img-fluid" alt="CMS Layouts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="feature">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="feature-image">
                            <img src="@/resources/images/homepage/pages-image.png" class="img-fluid" alt="CMS Pages" />
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="feature-content">
                            <div><div class="feature-pill"><span>Included</span></div></div>
                            <h3>Pages</h3>
                            <p>Pages hold the content for each URL. A page file defines the page URL and the page content. Pages are rendered inside layouts with the page tag that should be called in the layout code.</p>
                            <a href="https://docs.octobercms.com/3.x/cms/themes/pages.html" target="_blank" class="btn btn-outline-primary btn-pill">Learn more about Pages</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="feature pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-1">
                        <div class="feature-content">
                            <div><div class="feature-pill"><span>CMS Feature</span></div></div>
                            <h3>Partials</h3>
                            <p>
                                Partials contain chunks of HTML code that are used anywhere throughout your website. They allow you to simplify the code of complex pages and reuse code in multiple places.
                                Also, partials are an important part of the <a href="https://docs.octobercms.com/3.x/cms/ajax/introduction.html" target="_blank">built-in AJAX framework</a>.
                            </p>
                            <a href="https://docs.octobercms.com/3.x/cms/themes/partials.html" target="_blank" class="btn btn-outline-primary btn-pill">Learn more about Partials</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="feature-image">
                            <img src="@/resources/images/homepage/partials-image.png" class="img-fluid" alt="CMS Layouts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="actioncall">
            <div class="container">
                <h3>There are more great CMS features!</h3>
                <p class="lead">Visit the October CMS Documentation website to learn everything about the CMS features.</p>
                <a href="https://octobercms.com/features" target="_blank" class="btn btn-primary btn-lg btn-pill">Learn more about October CMS</a>
                <div class="actioncall-decoration-1"></div>
                <div class="actioncall-decoration-2"></div>
                <div class="actioncall-decoration-3"></div>
            </div>
        </div>

        <div v-if="$components?.blog && $components?.blog.get('posts', []).length > 0" class="latestnews">
            <div class="container">
                <h3>Latest News</h3>

                <div class="blog-featured row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 pb-5">
                    <BlogPostCard v-for="post of $components?.blog.get('posts')" :key="post.id" :post="post" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import HomeLayout from '@/layouts/Home.vue';
import BlogPostCard from '@/partials/blog/BlogPostCard.vue';

// Define Component
defineOptions({ layout: HomeLayout });

// States
const latestPosts = computed<any[]>(() => {
    //{% set latestPosts = blog.limit(3).get %}
    return [];
});
</script>

<style lang="css" scoped>
.page-index {
    .jumbotron {
        background: linear-gradient(102.01deg, #DB6A26 0.3%, #DBB326 106.31%);
        padding-bottom: 0;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 186px;
            background-image: url('@/resources/images/waves/header-wave.svg');
            background-repeat: repeat-x;
            z-index: 1;
            bottom: -1px;
        }

        > .container {
            position: relative;
            z-index: 2;
        }

        /* Decorations */
        .jumbotron-decoration-1,
        .jumbotron-decoration-2 {
            content: '';
            border-radius: 100%;
            background-color: #F4F7F8;
            display: block;
            position: absolute;
            z-index: -1;
        }

        .jumbotron-decoration-1 {
            width: 524px;
            height: 524px;
            left: -10px;
            top: -84px;
            opacity: .04;
        }

        .jumbotron-decoration-2 {
            width: 524px;
            height: 524px;
            left: 648px;
            top: 260px;
            opacity: .05;
        }

        .jumbotron-intro {
            padding: 70px 100px;
            h1 {
                color: #fff;
                font-weight: 700;
            }
            p {
                color: #fff;
                margin-top: 30px;
            }
            .btn {
                &:not(:hover):not(:active) {
                    border-color: transparent;
                    background: rgba(255, 216, 170, 0.46);
                }
            }
        }

        .jumbotron-product {
            padding: 90px 0 35px 0;
            margin-right: -40px;
            margin-left: -100px;

            img {
                position: relative;
                z-index: 2;
            }
        }

        @media (max-width: 1399px) {
            .jumbotron-intro {
                h1 { font-size: 45px; }
            }
        }

        @media (max-width: 1199px) {
            .jumbotron-intro {
                padding-left: 0;
                h1 { font-size: 45px; }
            }
        }

        @media (max-width: 991px) {
            .jumbotron-intro {
                padding: 20px 0 0;
                h1 { font-size: 35px; }
            }
            .jumbotron-product {
                padding-top: 20px;
            }
        }
    }

    .intro {
        background-image: url('@/resources/images/homepage/about-page.png');
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 1427px auto;
        padding: 25px 0 568px;
        text-align: center;

        .img-leaf {
            width: 49px;
            margin: 35px 0;
        }

        h2 {
            font-weight: 700;
            font-size: 40px;
            margin: 0;
            padding-bottom: 40px;
        }

        p.lead {
            max-width: 850px;
            margin: 0 auto;
            display: block;
            font-weight: 400;
            font-size: 20px;
        }
    }

    .feature {
        .feature-content {
            padding: 50px 0 0;
        }

        .feature-pill {
            display: inline-block;
            background: #FFE9B4;
            border-radius: 100px;
            padding: 3px 20px;
            > span {
                opacity: 0.45;
                color: #000;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
            }
        }

        .feature-image {
            padding: 0 20px;
        }

        h3 {
            font-weight: 700;
            font-size: 26px;
            margin-bottom: 30px;
        }

        p {
            line-height: 28px;
            margin-bottom: 30px;
        }

        @media (max-width: 1199px) {
            .feature-content {
                padding-top: 0;
                padding-bottom: 50px;
            }
        }

        @media (max-width: 991px) {
            .feature-image {
                display: none;
            }
        }
    }

    .actioncall {
        text-align: center;
        background: linear-gradient(102.01deg, #eff4fd 0.3%, #f6f2ff 106.31%);
        padding: 70px 0;
        position: relative;
        overflow: hidden;
        z-index: 1;

        > .container {
            position: relative;
        }

        h3 {
            font-weight: 700;
            font-size: 60px;
            margin-bottom: 45px;
        }

        p.lead {
            font-weight: 400;
            font-size: 20px;
            margin-bottom: 40px;
            color: #586667;
        }

        /* Decorations */
        .actioncall-decoration-1,
        .actioncall-decoration-2,
        .actioncall-decoration-3 {
            content: '';
            border-radius: 100%;
            background-color: #F4F7F8;
            display: block;
            position: absolute;
            z-index: -1;
        }

        .actioncall-decoration-1 {
            background-color: #fff;
            width: 321px;
            height: 321px;
            left: -140px;
            top: -140px;
            opacity: .5;
        }

        .actioncall-decoration-2 {
            background-color: #fff;
            width: 380px;
            height: 380px;
            right: -165px;
            top: -180px;
            opacity: .5;
        }

        .actioncall-decoration-3 {
            background-color: #fff;
            width: 493px;
            height: 493px;
            left: 235px;
            bottom: -380px;
            opacity: .3;
        }

        @media (max-width: 1199px) {
            h3 { font-size: 50px; }
        }

        @media (max-width: 991px) {
            h3 { font-size: 40px; }
        }
    }

    .latestnews {
        h3 {
            margin: 50px 0;
            text-align: center;
            color: #000;
            font-weight: 700;
            font-size: 40px;
        }
    }
}
</style>
