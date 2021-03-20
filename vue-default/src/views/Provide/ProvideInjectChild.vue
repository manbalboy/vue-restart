<template>
    <div>
        <ProvideInjectChildChild :item="item"></ProvideInjectChildChild>
    </div>
</template>

<script>
    import ProvideInjectChildChild from './ProvideInjectChildChild.vue';
    export default {
        props: {
            item: {
                type: Array,
            },
        },
        components: { ProvideInjectChildChild },
    };
</script>

<style></style>
