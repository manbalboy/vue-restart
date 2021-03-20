<template>
    <div>
        <img alt="Vue logo" :src="url" />
        <input type="text" v-model="lengthText" />
        <button :disabled="!lengthText.length">disabled</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://kr.vuejs.org/images/logo.png',
                lengthText: '',
            };
        },
        mounted() {},
    };
</script>

<style></style>
