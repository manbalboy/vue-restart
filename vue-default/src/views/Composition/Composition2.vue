<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="state.num" />
            <span> + </span>
            <input type="text" v-model.number="state.num2" />
            <span> = </span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>

<script>
    import { reactive, computed } from 'vue';
    export default {
        setup() {
            let state = reactive({
                num: 0,
                num2: 0,
                result: computed(() => state.num + state.num2),
            });

            return {
                state,
            };
        },
    };
</script>

<style></style>
