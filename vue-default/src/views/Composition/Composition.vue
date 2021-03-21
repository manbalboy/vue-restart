<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="state.num" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model.number="state.num2" @keyup="plusNumbers" />
            <span> = </span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    export default {
        setup() {
            let state = reactive({
                num: 0,
                num2: 0,
                result: 0,
            });

            function plusNumbers() {
                state.result = state.num + state.num2;
            }

            return {
                state,
                plusNumbers,
            };
        },
    };
</script>

<style></style>
