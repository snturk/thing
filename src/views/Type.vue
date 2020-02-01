<template>
  <div id="app">
    <div id="typeTitle">choose a type</div>
    <div id="typeContainer">
      <div class="type" v-on:click="setType(2)">4 sec</div>
      <div class="type" v-on:click="setType(7)">7 sec</div>
      <div class="type" v-on:click="setType(11)">11 sec</div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import Vuex from '../store/index.js'
export default {
  data(){
    return{
      
    }
  },
  methods: {
    setType(typeNum){
      Vuex.state.meditationType = typeNum;
      router.push('/meditation');
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