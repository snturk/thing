<template>
  <div id="app">
    <div id="typeContainer">
      <div class="type" v-on:click="() => {}">3 4 2</div>
      <div class="type" v-on:click="() => {}">2 8 1</div>
      <div class="type" v-on:click="() => {}">4 7 2</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inhale: 0,
      hold: 0,
      exhale: 0,
    }
  },
  
  created() {
    document.body.style.background = "black"; 
  },
}
</script>

<style scoped>
#typeContainer{
  width: fit-content;
  margin: auto;
  margin-top: 12%;
}
.type{
  margin-bottom: 110%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 40px;
  border: 2px floralwhite solid;
  padding: 15px;
  border-radius: 11px;
  transition-duration: 450ms;
}
.type:hover{
  color: black;
  background-color: floralwhite;
  transform: scale(0.87);
  cursor: pointer;
}
</style>