<template>
    <div>
        <div>props :{{ item }}</div>
        <div>inject :{{ itemArray }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Array,
            },
        },
        inject: ['itemArray'],
    };
</script>

<style></style>
