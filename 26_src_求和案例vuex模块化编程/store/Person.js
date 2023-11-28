import Axios  from 'axios';
import { nanoid } from 'nanoid';
export default {
    namespaced: true,
    state: {
        persons: [
            { id: '001', name: 'Eason',},
        ],
    },
    getters: {
        firstPersonName(state) {
            return state.persons[0].name;
        }
    },
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value);
            } else {
                alert('ERROR- you input wang ')
            }
        },
        // 
        addPersonServer(context, value) {
            Axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`)
            .then((result) => {
                context.commit('ADD_PERSON', { id: nanoid(), name: result.data})
            }).catch((err) => {
                alert('ERROR- ' + err.message)
            });
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value);
        },
    },
}