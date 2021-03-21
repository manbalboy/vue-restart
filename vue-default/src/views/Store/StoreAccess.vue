<template>
    <div>
        <button @click="increment">증가</button>
        <h2>count : {{ count }}</h2>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            },
        },
        methods: {
            ...mapMutations(['increment']),
            increment22() {
                this.$store.commit('increment');
            },
            // increment2() {
            //     this.increment();
            // },
        },
    };
</script>

<style></style>
