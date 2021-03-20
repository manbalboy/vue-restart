<template>
    <div>
        <button @click="getProductList">가져오기</button>

        {{ productList }}
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                productList: [],
            };
        },
        methods: {
            async getProductList() {
                this.productList = await this.api(
                    'https://13f378ba-d0a2-456d-b5ba-22e646981d07.mock.pstmn.io/productList',
                    'GET',
                    '',
                );
            },
            async api(url, method, data) {
                return (
                    await axios({
                        method,
                        url,
                        data,
                    }).catch(e => {
                        console.log(e);
                    })
                ).data;
            },
        },
    };
</script>

<style></style>
