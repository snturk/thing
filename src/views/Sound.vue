<template>
  <div id="app">
    <div class="typeTitle">choose a sound</div>
    <div class="typeContainer">
      <div class="type" v-on:click="setSound('none')">none</div>
      <div class="type" id="fire" v-on:click="setSound('fire')">fire</div>
      <div class="type" id="water" v-on:click="setSound('water')">water</div>
      <div class="type" id="music" v-on:click="setSound('classic')">music</div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import Vuex from '../store/index.js'
export default {
  name: 'sound',
  data(){
    return {

    }
  },
  methods: {
    setSound(type){
      Vuex.state.meditationSound = type;
      router.push('/meditation')
    }
  },
  created(){
    document.body.style.background = "black;"
  }
}
</script>

<style scoped>
.type {
  margin-bottom: 50%;
}
#fire{
  background-color: #ff6666;
  color: #ffff66;
}

#water{
  background-color: #668cff;
  color: floralwhite;
}

#music{
  background-color: #ff66ff;
  color: floralwhite;
}

</style>