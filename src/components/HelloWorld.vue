<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        El vuex nos permite centralizar data y usarla de manera global
    </p>

    <p>
        Estamos usando Vue CLI y vuex.
        VUE CLI para tener un modelo de pagina
        Vuex nos permite centralizar la data y usarla
    </p>

  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
}



</script>
