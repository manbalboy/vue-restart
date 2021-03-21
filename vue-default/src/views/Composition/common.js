import { reactive, computed, toRefs } from 'vue';
export default function plusNumbers() {
    let state = reactive({
        num: 0,
        num2: 0,
        result: computed(() => state.num + state.num2),
    });

    return toRefs(state);
}
