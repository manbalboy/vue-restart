<template>
    <div>
        <ProvideInjectChild :item="item" />
    </div>
</template>

<script>
    import ProvideInjectChild from './ProvideInjectChild.vue';
    export default {
        data() {
            return {
                item: [1, 3, 5, 9],
            };
        },
        components: {
            ProvideInjectChild,
        },
        provide() {
            return {
                itemArray: [...this.item, 3],
            };
        },
    };
</script>

<style></style>
