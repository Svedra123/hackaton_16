

<template>
  <div class="about" id="app">


   <button @click="obtenerAlbunes" >Obtener Album</button>

  
    <ul v-for="item of usuarios">
        <li> {{item.name}} </li>
    </ul>

  

  
  
  
  </div>
  

</template>

<script>
  import{mapState} from 'vuex'


  export default {
  
  name: 'album',
  computed:  ({
    ...mapState([ 'albunes' ])
  }),

  methods: ({
    ...mapActions(['obtenerAlbunes'])
  })

}

</script>

