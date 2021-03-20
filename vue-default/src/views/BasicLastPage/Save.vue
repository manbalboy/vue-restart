<template>
    <div>
        <input type="text" v-model="name" />
        <input type="text" v-model.number="age" />
        <input type="text" v-model="job" />
        <button @click="saveButton">저장</button>
        <br />
        {{ userInfos }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                age: '',
                job: '',
                userInfos: [],
            };
        },
        methods: {
            saveButton() {
                if (!this.name.length) {
                    return alert('이름을 입력');
                }

                if (this.age == '0' || this.age == '') {
                    return alert('나이 입력');
                }

                const param = {
                    name: this.name,
                    age: this.age,
                    job: this.job,
                };

                const result = this.save(param);

                if (result == 'S') {
                    this.name = '';
                    this.age = '';
                    this.job = '';
                    alert('저장되었습니다.');
                }
            },

            save(param) {
                this.userInfos.push(param);
                return 'S';
            },
        },
    };
</script>

<style></style>
