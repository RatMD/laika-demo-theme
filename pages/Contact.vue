<october>
title = "Contact Us"
url = "/contact"
layout = "Default.vue"
meta_title = "Get in touch!"

[resources]
vars[activeNavLink] = 'contact'
vars[blueFooterStyle] = 1
</october>

<template>
    <div class="page-contact">
        <div class="container my-5 py-4">
            <div class="row">
                <div class="col-lg-4">
                    <h1>Ready for something new? Get in touch!</h1>
                    <p class="py-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <div class="contact-options">
                        <div class="option mb-2 d-flex">
                            <div class="pe-3">
                                <img src="@/resources/images/icons/icon-address.png" width="42" alt="" />
                            </div>
                            <div>
                                <h3 class="my-1">Address</h3>
                                <p>Cupertino, California, United States</p>
                            </div>
                        </div>
                        <div class="option mb-2 d-flex">
                            <div class="pe-3">
                                <img src="@/resources/images/icons/icon-email.png" width="42" alt="" />
                            </div>
                            <div>
                                <h3 class="my-1">Email</h3>
                                <p><a href="mailto:example@example.tld">example@example.tld</a></p>
                            </div>
                        </div>
                        <div class="option mb-2 d-flex">
                            <div class="pe-3">
                                <img src="@/resources/images/icons/icon-phone.png" width="42" alt="" />
                            </div>
                            <div>
                                <h3 class="my-1">Phone</h3>
                                <p>0 (123) 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-1">
                    <img src="@/resources/images/contact/team.png" class="img-fluid" alt="Team Shot" />
                </div>
            </div>
        </div>

        <div class="contactform">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <ContactForm />
                        <div class="contactform-decoration-1"></div>
                        <div class="contactform-decoration-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/Default.vue';
import ContactForm from '@/partials/about/ContactForm.vue';

// Define Component
defineOptions({ layout: DefaultLayout });
</script>

<style lang="css" scoped>
.contactform {
    text-align: center;
    background: #f6f2ff;
    padding: 70px 0;
    position: relative;
    overflow: hidden;
    z-index: 1;

    > .container {
        position: relative;
    }

    h3 {
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 45px;
    }

    p.lead {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 40px;
    }

    /* Decorations */
    .contactform-decoration-1,
    .contactform-decoration-2 {
        content: '';
        border-radius: 100%;
        background-color: #F4F7F8;
        display: block;
        position: absolute;
        z-index: -1;
    }

    .contactform-decoration-1 {
        background-color: #fff;
        width: 321px;
        height: 321px;
        left: -140px;
        top: -140px;
        opacity: .5;
    }

    .contactform-decoration-2 {
        background-color: #fff;
        width: 380px;
        height: 380px;
        right: -165px;
        top: -180px;
        opacity: .5;
    }
}
</style>
