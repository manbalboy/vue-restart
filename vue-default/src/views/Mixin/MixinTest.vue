<template>
    <div>
        <button @click="getProductList">가져오기</button>
        <table>
            <thead>
                <tr>
                    <th>상품평</th>
                    <th>가격</th>
                    <th>배송비</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody v-if="!productList.length">
                <tr>
                    <td colspan="4">조회된건이없습니다.</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="(product, index) in productList" :key="index">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.delivery_price }}</td>
                    <td>{{ product.category }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <!-- {{ productList }} -->
    </div>
</template>

<script>
    import ApiMixin from '../../api.js';
    export default {
        data() {
            return {
                productList: [],
            };
        },
        mixins: [ApiMixin],
        mounted() {
            console.log('vue 컴포넌트 마운티드');
        },
        methods: {
            async getProductList() {
                this.productList = await this.$API(
                    'https://13f378ba-d0a2-456d-b5ba-22e646981d07.mock.pstmn.io/productList',
                    'GET',
                    '',
                );
            },
        },
    };
</script>

<style></style>
