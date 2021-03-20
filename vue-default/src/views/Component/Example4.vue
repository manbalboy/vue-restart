<template>
    <div>
        <PageTitle :title="title"></PageTitle>
        <ChildComponent type="props" :likes="likes" :isOk="isOk" />
        <ChildComponent type="props1" :commentArray="[1, 2, 3, 4]" :author="{ test: 1 }" />
        <br />
        <br />
        <button @click="callChildMethod">자식에 있는 메서드 바로 클릭</button>
        <button @click="callChild">자식에 있는 버튼 클릭 접근</button>
        <ChildComponent type="event" ref="child_component" />
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
            callChildMethod() {
                this.$refs.child_component.clickFn2();
            },
        },
    };
</script>

<style></style>
