<template>
    <div>
        <div v-if="type == 'props'">
            <p>============자식 props==============</p>
            <div>likes : {{ likes }}</div>
            <div>isOk : {{ isOk }}</div>
        </div>
        <div v-else-if="type == 'props1'">
            <div>commentArray : {{ commentArray }}</div>
            <div>author : {{ author }}</div>
            <br />
            <br />
        </div>
        <div v-else>
            <p>============자식 이벤트==============</p>
            <button @click="clickFn" ref="child_btn">자식에 있는 클릭</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
            },
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
        methods: {
            clickFn() {
                alert('부모에서 발생시킨 이벤트');
            },
            clickFn2() {
                alert('부모에서 바로 접근한 메서드');
            },
        },
    };
</script>

<style></style>
