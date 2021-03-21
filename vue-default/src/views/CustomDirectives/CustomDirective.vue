<template>
    <div>
        <input type="text" v-focus />
        <input type="text" v-innerFocus />
    </div>
</template>

<script>
    export default {
        directives: {
            innerFocus: {
                mounted(el) {
                    el.value = 'zzz';
                },
            },
        },
    };
</script>

<style></style>
