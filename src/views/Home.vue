<template>
  <div id="app">
    <div id="mainContainer">
      <div class="bubble" id="bubble1"></div>
      <div class="bubble" id="bubble2"></div>
      <div class="bubble" id="bubble3"></div>
      <div class="bubble" id="bubble4"></div>
      <div class="bubble" id="bubble5"></div>
      <div id="mainTitle" v-on:click="clickedTitle()">thing</div>
      <div id="description">pure breathe exercise</div>
    </div>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  methods: {
    clickedTitle(){
        document.getElementById("mainContainer").style.background = "black";
        document.getElementById("mainTitle").style.color = "floralwhite";
        document.getElementById("mainTitle").style.borderColor = "floralwhite";
        document.getElementById("mainTitle").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("mainTitle").style.display = "none";
          router.push("type");
          }, 300);
      }
  },
  created() {
    document.getElementById("mainContainer").style.background = "#90b1ff";
    document.getElementById("mainTitle").style.color = "black";
    document.getElementById("mainTitle").style.borderColor = "black";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.display = "block";
  }
  
}
</script>

<style scoped>
#mainContainer{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #90b1ff;
  transition-duration: 900ms;
  z-index: -2;
}
.bubble{
  animation-duration: 140s;
  animation-iteration-count: infinite;
  position: absolute;
  background-color: #6691ff;
  padding: 120px;
  border: 1px black solid;
  border-radius: 50%;
  filter: blur(10px);
  z-index: -1;
  transition-duration: 300ms;
}

#bubble1{animation-name: bubble1;}
@keyframes bubble1 {
  0% {top: 15%; left: 47%;}
  19% {top: 83%; left: 24%;}
  48% {top: 50%; left: 76%;}
  69% {top: 34%; left: 2%;}
  100% {top: 15%; left: 47%;}
}
#bubble2{animation-name: bubble2;}
@keyframes bubble2 {
  0% {top: 57%; left: 71%;}
  25% {top: 4%; left: 61%;}
  50% {top: 34%; left: 35%;}
  75% {top: 6%; left: 7%;}
  100% {top: 57%; left: 71%;}
}
#bubble3{animation-name: bubble3;}
@keyframes bubble3 {
  0% {top: 45%; left: 83%;}
  17% {top: 3%; left: 14%;}
  58% {top: 9%; left: 81%;}
  80% {top: 14%; left: 78%;}
  100% {top: 45%; left: 83%;}
}
#bubble4{animation-name: bubble4;}
@keyframes bubble4 {
  0% {top: 22%; left: 21%;}
  21% {top: 79%; left: 9%;}
  68% {top: 59%; left: 53%;}
  82% {top: 76%; left: 19%;}
  100% {top: 22%; left: 21%;}
}
#bubble5{animation-name: bubble5;}
@keyframes bubble5 {
  0% {top: 58%; left: 96%;}
  23% {top: 40%; left: 83%;}
  55% {top: 24%; left: 57%;}
  77% {top: 16%; left: 62%;}
  100% {top: 58%; left: 96%;}
}

#mainTitle{
  font-family: 'Assistant', sans-serif;
  font-weight: 200;
  font-size: 64px;
  color: black;
  margin: auto;
  margin-top: 21%;
  padding: 15px;
  border: 1.9px black solid;
  border-radius: 11px;
  width: fit-content;
  transition-duration: 450ms;
  z-index: 1000;
}
#mainTitle:hover{
  color: floralwhite;
  background-color: black;
  transform: scale(0.87);
  cursor: pointer;
}

#description{
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  font-size: 20px;

}
</style>
