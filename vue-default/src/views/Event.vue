<template>
    <div>
        <button @click="increaseCounter(), one()">Event</button>
        <button @click="increaseCounter">Event</button>

        <p>The count is : {{ count }}</p>

        <br />
        <select v-model="city" @change="changeSelect">
            <option value="02">서울</option>
            <option value="01">청주</option>
            <option value="00">세종</option>
        </select>

        <br />
        <input type="text" @keyup.enter="keyupEnter($event, 'z')" v-model="textValue" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 1,
                city: '',
                textValue: '',
            };
        },
        methods: {
            increaseCounter() {
                this.count = ++this.count;
            },
            one() {
                console.log(1111);
            },
            changeSelect() {
                console.log(this.city);
            },
            keyupEnter(e, v) {
                console.log(e, v);
                console.log(this.textValue);
            },
        },
    };
</script>

<style></style>
