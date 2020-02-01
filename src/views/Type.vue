<template>
  <div id="app">
    <div id="typeTitle">choose a type</div>
    <div id="typeContainer"><router-link to="/meditation">
      <div class="type" v-on:click="() => {}">4 sec</div>
      <div class="type" v-on:click="() => {}">7 sec</div>
      <div class="type" v-on:click="() => {}">11 sec</div>
      </router-link>
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
#typeTitle{
  font-size: 46px;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 4%;
}

#typeContainer{
  width: fit-content;
  margin: auto;
  margin-top: 4%;
}
.type{
  margin-bottom: 70%;
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