<template>
    <SlotModalLayout>
        <template v-slot:header>
            <h1>타이틀</h1>
        </template>
        <template v-slot:default>
            <p>내용내용내욜</p>
        </template>
        <template v-slot:footer>
            <button>닫기</button>
        </template>
    </SlotModalLayout>
</template>

<script>
    import SlotModalLayout from '../../components/SlotModalLayout.vue';
    export default {
        components: { SlotModalLayout },
    };
</script>

<style></style>
