import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        search: '',
        history: [],
    },
    mutations: {
        changeSearch(state, e) {
            state.search = e.target.value;
        },
        addHistory(state, newItem) {
            const history = [...state.history];
            history.push(newItem);
            state.history = history;
        }
    },
    getters: {
        search: state => state.search,
        history: state => state.history,
    }
});

export default store;