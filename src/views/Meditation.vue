<template>
  <div id="app">
    <div id="circle">

    </div>
    <div id="message">
      Breathe In
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    document.body.style.background = "black";
  }
}
</script>

<style scoped>
#circle{
  margin: auto;
  margin-top: 22%;
  width: fit-content;
  background-color: #90b1ff;
  border-radius: 50%;
  padding: 60px;
  transition-duration: 7000ms;
  animation-name: circle;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
#circle:hover{
  transform: scale(0.05);
}
@keyframes circle{
  0% {transform: scale(0.05)}
  50% {transform: scale(1)}
  100% {transform: scale(0.05)}
}

#message{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 34px;
  margin-top: 4%;
}
  
</style>