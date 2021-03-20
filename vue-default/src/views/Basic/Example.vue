<template>
    <div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model.number="valueModel2" />
        <textarea name="gg" id="" cols="30" rows="10" v-model="textValue"></textarea>
        <!-- {{ textValue }} -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valueModel: 'korea',
                valueModel2: 12,
                textValue: '',
            };
        },
        mounted() {
            console.log(this.valueModel2);
        },
    };
</script>

<style></style>
