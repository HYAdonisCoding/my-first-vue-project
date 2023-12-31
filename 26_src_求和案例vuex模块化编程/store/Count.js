export default {
    namespaced: true,
    state: {
        sum: 0, //
        school: '北大',
        subject: 'Computer Science',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },
    },
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREMENT', value);
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value);
            }, 2000);
        },
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum -= value;
        },
    },
}