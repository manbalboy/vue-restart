<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="01">청주</option>
            <option value="00">세종</option>
        </select>
        <br />
        <p>체크박스</p>
        <label>
            <input type="checkbox" :value="label1" v-model="checked2" />
            서울
        </label>
        <label>
            <input type="checkbox" :value="label2[0]" v-model="checked2" />
            부산
        </label>
        <label>
            <input type="checkbox" :value="label2[1]" v-model="checked" />
            제주
        </label>
        <br />
        <p>라디오</p>
        <label>
            <input type="radio" value="제주" v-model="picked" />
            제주
        </label>
        <label>
            <input type="radio" value="서울" v-model="picked" />
            서울
        </label>
        <label>
            <input type="radio" value="부산" v-model="picked" />
            부산
        </label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                city: '00',
                checked2: [],
                checked: ['제주'],
                picked: '서울',
                label1: '서울',
                label2: ['부산', '제주'],
            };
        },
        mounted() {
            console.log(this.valueModel2);
        },
    };
</script>

<style></style>
