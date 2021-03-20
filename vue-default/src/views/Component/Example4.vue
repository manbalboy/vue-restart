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

        <br />
        <br />
        <p>============ 자식컴포넌트로부터 받는 이벤트 ==================</p>
        <ChildComponent type="event2" @sendFromChildData="sendMsg" />
        <p>{{ msg }}</p>

        <p>============ 자식컴포넌트와 부모컴포넌트 DATA 동기화 ==================</p>
        <ChildComponent type="sync" ref="childComp" />
        <button @click="ok">확인</button>
        <!-- <p>{{ syncMsg }}</p> -->
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
                msg: '',
                msg2: '',
            };
        },
        computed: {
            syncMsg() {
                return this.$refs.childComp.msg;
            },
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
            sendMsg({ msg }) {
                this.msg = msg;
            },
            ok() {
                alert(this.syncMsg);
            },
        },
    };
</script>

<style></style>
