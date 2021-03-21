<template>
    <ComposiontInject />
</template>

<script>
    import ComposiontInject from './CompositionInject.vue';
    import { provide } from 'vue';
    export default {
        components: {
            ComposiontInject,
        },
        setup() {
            provide('title', 'Vue.js 프로젝트');
            provide('title2', 'title2');
        },
    };
</script>

<style></style>
