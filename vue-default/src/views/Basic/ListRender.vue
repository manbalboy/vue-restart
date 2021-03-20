<template>
    <div>
        <select v-model="city">
            <option :value="city.v" v-for="(city, i) in options" :key="i">
                {{ city.t }}
            </option>
        </select>

        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>제품카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, i) in productList" :key="i">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.delivery_price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'ListRender',
        data() {
            return {
                city: '00',
                options: [
                    {
                        v: '02',
                        t: '서울',
                    },
                    {
                        v: '01',
                        t: '부산',
                    },
                    {
                        v: '00',
                        t: '제주',
                    },
                ],
                productList: [
                    {
                        product_name: '기계식키보드',
                        price: 80000,
                        delivery_price: 5000,
                        category: '전자제품',
                    },
                    {
                        product_name: '마우스',
                        price: 8000,
                        delivery_price: 500,
                        category: '전자제품',
                    },
                ],
            };
        },
    };
</script>

<style></style>
