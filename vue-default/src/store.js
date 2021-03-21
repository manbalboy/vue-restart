import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 100,

            user: {},
        };
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
        setUser(state, data) {
            state.user = data;
        },
    },
});

export default store;
