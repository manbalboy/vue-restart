<template>
    <PageTitle :title="title"></PageTitle>
</template>

<script>
    import PageTitle from '../../components/PageTitle.vue';
    export default {
        data() {
            return {
                title: '컴포넌트 타이틀',
            };
        },
        components: {
            PageTitle,
        },
    };
</script>

<style></style>
