<template>
    <PageTitle :title="title"></PageTitle>
    <ChildComponent :likes="likes" :isOk="isOk"></ChildComponent>
    <ChildComponent :commentArray="[1, 2, 3, 4]" :author="{ test: 1 }"></ChildComponent>
</template>

<script>
    import PageTitle from '../../components/PageTitle.vue';
    import ChildComponent from './ChildComponent.vue';
    export default {
        data() {
            return {
                title: '컴포넌트 타이틀',
                likes: 23111,
                isOk: false,
            };
        },
        components: {
            PageTitle,
            ChildComponent,
        },
    };
</script>

<style></style>
