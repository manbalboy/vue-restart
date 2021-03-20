<template>
    <div>
        <div>likes : {{ likes }}</div>
        <div>isOk : {{ isOk }}</div>
        <div>commentArray : {{ commentArray }}</div>
        <div>author : {{ author }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            likes: {
                type: Number,
                default: 0,
            },
            isOk: {
                type: Boolean,
                default: false,
            },
            commentArray: {
                type: Array,
            },
            author: {
                type: Object,
            },
        },
    };
</script>

<style></style>
