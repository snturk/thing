<template>
  <div id="app">
    <div :style="{animationDuration: duration + 's'}" id="mediContainer">
      <div :style="{animationDuration: duration + 's'}" id="circle">

      </div>
      <div :style="{animationDuration: duration/2 + 's'}" id="message">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from '../store/index.js'
export default {
  data(){
    return{
      message: "breath in",
      duration: Vuex.state.meditationType
      }
      
  },
  methods: {
    changeMsg(){
        if(this.message == "breath in"){
          this.message = "breath out"
        }else{
          this.message = "breath in"
        }  
    }
  },
  created(){
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
  animation-name: body;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
@keyframes body {
  0% {background-color: black}
  50% {background-color: rgb(124, 13, 35)}
  100% {background-color: black}
}

#circle{
  margin: auto;
  margin-top: 19%;
  width: fit-content;
  background-color: #90b1ff;
  border-radius: 50%;
  padding: 80px;
  box-shadow: 2px 2px 14px black;
  animation-name: circle;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
@keyframes circle{
  0% {transform: scale(0.1)}
  50% {transform: scale(1);}
  100% {transform: scale(0.1)}
}

#message{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 34px;
  margin-top: 4%;
  animation-name: message;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes message{
  0% {opacity: 0}
  20% {opacity: 1}
  80% {opacity: 1}
  100% {opacity: 0}
}
  
</style>