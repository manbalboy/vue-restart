import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 100,
        };
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
    },
});

export default store;
