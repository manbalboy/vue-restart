<template>
    <div v-html="htmlString"></div>
</template>

<script>
    export default {
        data() {
            return {
                htmlString: '<p style="color:red;">test</p>',
            };
        },
    };
</script>

<style></style>
