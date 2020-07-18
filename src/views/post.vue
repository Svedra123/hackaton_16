<template>
  
  


  <div>

   <button @click="obtenerUsuarios" >Obtener Usuarios</button>

    <ul v-for="item of usuarios">
        <li> {{item.title}} </li>
    </ul>
  
  
  
  </div>
  


</template>

<script>
  import{mapState} from 'vuex'
  
  export default {


  computed:  ({
    ...Vuex.mapState([ 'usuarios' ])
  }),

  methods: ({
    ...Vuex.mapActions(['obtenerUsuarios'])
  })

}

</script>



