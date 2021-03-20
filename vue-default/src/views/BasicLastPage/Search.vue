<template>
    <div>
        <div>
            <select v-model="selectedCity">
                <option value="city.code" v-for="(city, i) in cityList" :key="i">
                    {{ city.name }}
                </option>
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList" />
            <button @click="searchUserList">Search</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person, i) in userList" :key="i">
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                selectedCity: '',
                userName: '',

                cityList: [
                    { name: '서울', code: '01' },
                    { name: '부산', code: '02' },
                    { name: '제주', code: '03' },
                ],
                userList: [],
            };
        },
        methods: {
            searchUserList() {
                const params = {
                    selectedCity: this.selectedCity,
                    userName: this.userName,
                };

                this.userList = this.getUserList(params);
            },
            getUserList(params) {
                console.log(params);
                let list = [
                    {
                        name: '유재석',
                        age: 50,
                        job: '연예인',
                    },
                    {
                        name: '김종국',
                        age: 40,
                        job: '가수',
                    },
                    {
                        name: '하하',
                        age: 30,
                        job: '가수,연예인',
                    },
                ];
                return list;
            },
        },
    };
</script>

<style></style>
