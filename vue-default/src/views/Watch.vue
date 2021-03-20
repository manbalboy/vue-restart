<template>
    <div>
        <input type="text" v-model.number="x1" />
        <input type="text" v-model.number="x2" />
        <input type="text" v-model.number="y" />
    </div>
</template>

<script>
    export default {
        name: 'Watch',
        data() {
            return {
                x1: 0,
                x2: 0,
                y: 0,
            };
        },
        computed: {},
        watch: {
            x1() {
                this.y = this.x1 + this.x2;
            },
        },
    };
</script>

<style></style>
