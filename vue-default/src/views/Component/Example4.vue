<template>
    <div>
        <PageTitle :title="title"></PageTitle>
        <ChildComponent type="props" :likes="likes" :isOk="isOk"></ChildComponent>
        <ChildComponent
            type="props1"
            :commentArray="[1, 2, 3, 4]"
            :author="{ test: 1 }"
        ></ChildComponent>
        <br />
        <br />
        <button @click="callChild">부모에있는 클릭</button>
        <ChildComponent type="event" ref="child_component"></ChildComponent>
    </div>
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
        methods: {
            callChild() {
                this.$refs.child_component.$refs.child_btn.click();
            },
        },
    };
</script>

<style></style>
