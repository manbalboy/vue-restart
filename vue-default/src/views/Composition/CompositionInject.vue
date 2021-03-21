<template>
    <div>{{ title }} //// {{ title2 }}</div>
</template>

<script>
    import { inject } from 'vue';
    export default {
        setup() {
            const title = inject('title');
            const title2 = inject('title2');

            return {
                title,
                title2,
            };
        },
    };
</script>

<style></style>
