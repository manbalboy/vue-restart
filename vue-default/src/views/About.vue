<template>
    <div class="about">
        <h1>This is an about page</h1>
        {{ kakaoLogin }}
    </div>
</template>

<script>
    export default {
        computed: {
            kakaoLogin() {
                return this.$store.state.user;
            },
        },
    };
</script>
