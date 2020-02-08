<template>
  <div id="app">
    <div :style="{animationDuration: duration + 's'}" id="mediContainer">
      
      <div :style="{animationDuration: duration + 's'}" id="circle">

      </div>
      <div :style="{animationDuration: duration/2 + 's'}" id="message">
        {{message}}
      </div>
      <audio :src="sound" autoplay loop>
      </audio>
      <div id="back"><router-link to="/type">back</router-link></div>
    </div>
  </div>
</template>

<script>
import Vuex from '../store/index.js'
import router from '../router'
export default {
  data(){
    return{
      message: "breathe in",
      duration: Vuex.state.meditationType,
      sound: "",
      }
      
  },
  methods: {
    changeMsg(){
        if(this.message == "breathe in"){
          this.message = "breathe out"
        }else{
          this.message = "breathe in"
        }  
    }
  },
  created(){
    if(Vuex.state.meditationType == 0){
      router.push('/type');
    }
    if(Vuex.state.meditationSound == "fire"){
      this.sound = '/media/' + Vuex.state.meditationSound + '.66de88be.mp3';
    }else if(Vuex.state.meditationSound == "water"){
      this. sound = '/media/' + Vuex.state.meditationSound + '.c1a91378.mp3';
    }else if(Vuex.state.meditationSound == "music"){
      this. sound = '/media/' + Vuex.state.meditationSound + '.f60b972e.mp3';
    }
    document.body.style.background = "black";
    setInterval(()=>{
      this.changeMsg();
      
    }, this.duration/2*1000) // multiplied by 1000 because of seconds to miliseconds
  },
  
}
</script>

<style>
#mediContainer{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  animation-name: backgroundChange;
  animation-iteration-count: infinite;
}
@keyframes backgroundChange {
  0% {background-color: black}
  35%, 65% {background-color: #000f33}
  100% {background-color: black}
}

#circle{
  margin: auto;
  margin-top: 19%;
  width: fit-content;
  background: linear-gradient(180deg, #ff4d4d, #90b1ff);
  background-size: 400% 400%;
  border-radius: 50%;
  padding: 80px;
  box-shadow: 2px 2px 14px black;
  animation-name: circle;
  animation-iteration-count: infinite;
}
@keyframes circle{
  0% {transform: scale(0.1);background-position:50% 100%}
  30%, 70% {background-position:50% 100%}
  50% {transform: scale(1); background-position:50% 0%}
  100% {transform: scale(0.1);background-position:50% 100%}
}

#message{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 34px;
  margin-top: 4%;
  animation-name: message;
  animation-iteration-count: infinite;
}
@keyframes message{
  0% {opacity: 0}
  30% {opacity: 1}
  70% {opacity: 1}
  100% {opacity: 0}
}

#back{
  top: 2%;
  left: 2%;
  position: fixed;
  margin: auto;
  padding: 5px;
  border: 1px solid floralwhite;
  border-radius: 5px;
}
  
</style>