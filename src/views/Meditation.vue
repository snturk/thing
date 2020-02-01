<template>
  <div id="app">
    <div id="mediContainer">
      <div id="circle">

      </div>
      <div id="message">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message: "breath in",
      
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
      
    }, 4000)
  },
  
}
</script>

<style scoped>
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
  0% {opacity: 1}
  96% {opacity: 1}
  98% {opacity: 0}
  100% {opacity: 1}
}
  
</style>