<template>
  <div id="app">
    <div id="mainTitle" v-on:click="clickedTitle()">thing</div>
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
        document.body.style.background = "black";
        document.getElementById("mainTitle").style.color = "floralwhite";
        document.getElementById("mainTitle").style.borderColor = "floralwhite";
        document.getElementById("mainTitle").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("mainTitle").style.display = "none";
          router.push("type");
          }, 500);
      }
  },
  created() {
    document.body.style.background = "#90b1ff";
    document.getElementById("mainTitle").style.color = "black";
    document.getElementById("mainTitle").style.borderColor = "black";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.display = "block";
  }
  
}
</script>

<style scoped>
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
}
#mainTitle:hover{
  color: floralwhite;
  background-color: black;
  transform: scale(0.87);
  cursor: pointer;
}
</style>
