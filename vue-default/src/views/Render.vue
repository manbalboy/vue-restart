<template>
    <div>
        <div>
            <h1 v-if="type == 'A'">A</h1>
            <h1 v-else-if="type == 'B'">B</h1>
            <h1 v-else>bRender 값이 false 이면 보여짐</h1>
        </div>

        <div>
            <h1 v-show="bRender">show hide</h1>
        </div>

        자주 반복되면 show 한번랜더링이면 v-if 를 사용한다.
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'A',
                bRender: false,
            };
        },
    };
</script>

<style></style>
