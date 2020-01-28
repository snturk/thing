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
    }
  },
  created() {
    document.body.style.background = "#66dbff";
    document.getElementById("mainTitle").style.color = "black";
    document.getElementById("mainTitle").style.borderColor = "black";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.display = "block";
  },
  
}
</script>

<style scoped>
#mainTitle{
  font-size: 44px;
  color: black;
  margin: auto;
  margin-top: 13%;
  padding: 15px;
  border: 2.5px black solid;
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
