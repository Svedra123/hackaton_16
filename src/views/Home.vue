<template>
  <div class="home">
    
    <HelloWorld msg="Informacion relevante"/>



  </div>
    


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  text-align: left;
  padding-left: 15px;
}

.footer {
  top: 1000px;
}

</style>
