<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num" />
            <span> + </span>
            <input type="text" v-model.number="num2" />
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script>
    import plusNumbers from './common.js';
    export default {
        setup() {
            let { num, num2, result } = plusNumbers();
            return {
                num,
                num2,
                result,
            };
        },
    };
</script>

<style></style>
