<template>
    <div class="contact-us-form">
        <h3 class="mb-4">Drop Us a Line</h3>
        <p class="lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div v-if="props.isSubmit" class="alert alert-success text-start" role="alert">
            <h4 class="alert-heading">Thanks for getting in touch!</h4>
            <p>Please bear in mind we receive a lot of feedback, it may take several days to process and you may not receive a response.</p>
            <p class="mb-0">Not to worry though, we have your email <strong>{{ props.emailAddress }}</strong>, all feedback we receive will be read and action taken if needed.</p>
        </div>
        <form v-else data-request="onSubmitContactForm" data-request-flash>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" name="first_name" class="form-control" id="commentNameInput">
                        <label for="commentNameInput">First Name</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" name="last_name" class="form-control" id="commentLastNameInput">
                        <label for="commentLastNameInput">Last Name</label>
                    </div>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="email" name="email" class="form-control" id="commentEmailInput">
                <label for="commentEmailInput">Email address</label>
            </div>
            <div class="mb-3 form-floating">
                <textarea name="comments" style="height:125px" class="form-control" id="commentContentTextarea"></textarea>
                <label for="commentContentTextarea">Comment</label>
            </div>
            <div class="form-buttons d-flex pt-2">
                <div>
                    <button
                        type="submit"
                        data-attach-loading
                        class="btn btn-primary btn-lg btn-pill">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
export interface PartialProps {
    isSubmit: boolean;
    emailAddress: string;
}

// Define Component
const props = defineProps<PartialProps>();
</script>
