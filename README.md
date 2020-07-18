# hackaton_16
A) ¿Qué es VUEX?

Vuex es un patron de manejo de estado. Sirve para centralizar el estado y crear cambios predecibles 

B) Cuáles son los principales conceptos de VUEX y ejemplificarlos
los principales componentes son los siguientes:

State. Aca esta la data o valores, solo podran ser modificadas mediante mutaciones

Mutations. Son funciones que nos permiten cambiar el state

Actions. Mediante los actions se puede obtener data de un backend  api y procesarla mediante mutaciones.

Commit. El commit ejecuta la mutación 

Computed: Sirve para llamar al State en la hoja deseada
Methods: Sirve para llamar a las Mutaciones en la hoja deseada

Ejemplo global:

En el archivo .js

const store = new Vuex.Store ({
  state: {
    numero: 10,
    cursos: []
  },
  
  mutations: {
    aumentar(state){
      state.numero ++
    },
    disminuir(state,n){
      state.numero -= n
    }, 
    llenarCursos (state, cursosAction) {
      state.cursos = cursosAction
    }
  },
  
  actions: {
    obtenerCursos: async funtion ({ commit }) {
      const data = await fetch ('cursos.json');
      const cursos = await data.json();
      commit ('llenarCursos', cursos)
    }
  }
});

En el template:

<div>
  <button @click= "aumentar" >+</button>
  <button @click= "disminuir(2)" >-</button>
  <button @click= "obtenerCursos" >Obtener Cursos</button>
  
  <h1> numero {{ numero }} </h1>
  
  <ul v-for="item of cursos">
    <li> {{ item.nombre }} </li>
  </ul>
  
 </div>
 ,
 
 computed:{ 
  ...mapState (['numero', 'cursos'])
 },
 methods:{
  ...mapMutations (['aumentar', 'disminuir']),
  ...mapActions (['obtenerCursos'])
 }
   

C) Por qué y para qué se necesitaria utilizar un administrador de estados?
El administrador de estados es necesario para poder tener componentes globales que nos faciliten su uso llevando un control simple.
