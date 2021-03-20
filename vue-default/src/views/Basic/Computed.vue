<template>
    <div>
        <input type="text" v-model="fName" />
        <input type="text" v-model="lName" />
        <div>{{ fullName }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Computed',
        data() {
            return {
                fName: '유',
                lName: '재석',
            };
        },
        computed: {
            fullName() {
                return this.fName + ' ' + this.lName;
            },
        },
    };
</script>

<style></style>
