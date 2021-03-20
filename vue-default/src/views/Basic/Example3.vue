<template>
    <div>
        <div class="containner" :class="{ active: isActive, 'text-red': isRed }">ClassBinding</div>
        <div class="containner" :class="[activeClass, redClass]">ClassBinding</div>

        <div :style="styleObject">인라인스타일</div>
        <div :style="[baseStyle, addStyle]">인라인스타일2</div>

        <br />
        <p>속성에 바인딩 ==============</p>
        <img alt="Vue logo" :src="url" />
        <input type="text" v-model="lengthText" />
        <button :disabled="!lengthText.length">disabled</button>

        <div class="containner">ClassBinding</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://kr.vuejs.org/images/logo.png',
                lengthText: '',
                isActive: true,
                isRed: true,
                activeClass: '',
                redClass: 'text-red',
                styleObject: {
                    backgroundColor: 'yellow',
                    color: 'red',
                    width: '100%',
                    height: '100px',
                },
                baseStyle: 'background-color:blue',
                addStyle: 'color:red',
            };
        },
        mounted() {},
    };
</script>

<style>
    .containner {
        width: 100%;
        height: 100px;
    }

    .active {
        background-color: #0a0;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }
</style>
