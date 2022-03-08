import router from "../router"

export default {
    namespaced: true,
    state: {
        users: [],
        user: null,
        token: String
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
            console.log(!!state.user)
        }
    },
    actions: {
        CerrarSesion({commit}){
            commit('setUser', null)
            router.push('/Login')
        },
        Login({commit}, usuario){
            commit('setUser', usuario)
            router.push('/crearCita')
            console.log(usuario)
        }
    },
    getters: {
        usuarioAutenticado(state){
            return !!state.user
        }
    }
}