
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        usuarios: [],
        albunes: [],
        post: []

    },

    mutations: {
        llenarUsuarios (state, usuariosAccion){
            state.usuarios = usuariosAccion
        },
        
        llenarPost (state, postAccion){
            state.post = postAccion
        },


        llenarAlbum (state, albunesAccion){
            state.albunes = albunesAccion
        }

    },
    actions: {
        obtenerUsuarios: async function ({ commit }) {
            const data = await fetch ('https://jsonplaceholder.typicode.com/users');
            const usuarios = await name.json() ; 
            commit ('llenarUsuarios', usuarios )
            console.log(usuarios)
        },

        obtenerPost: async function ({ commit }) {
            const data = await fetch ('https://jsonplaceholder.typicode.com/posts');
            const post = await title.json() ; 
            commit ('llenarAlbum', post )
        },

        obtenerAlbunes: async function ({ commit }) {
            const data = await fetch ('https://jsonplaceholder.typicode.com/albums');
            const albunes = await title.json() ; 
            commit ('llenarAlbum', albunes )
        }

    }


})