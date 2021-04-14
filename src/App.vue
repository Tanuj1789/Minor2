<template>
  <div id="app">
  <div class="flex-row">
  <div>{{user}} space</div>
  <div> SOS </div>
  </div>
  <hr style="height:2px colour:black">
    <Home user="user"/>
     <div class="flex-row" >
      <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle">
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/>
    </div>
  </div>

</template>

<script>
import Home from './components/Home.vue'
// import Sospage from './components/sospage.vue'
export default {
  name: 'App',
  components: {
    Home,
    // Sospage,
  },
  data(){
    return {
      user:"dpt's"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background:blue; */
  min-height: 100vh;
  display:flex;
  flex-direction: column;
}
.flex-row{
  display:flex;
  justify-content: space-between;
  flex-grow: 1;
}
.flex-end{
  display:flex;
  justify-content: flex-end;
  align-content: space-around;
  flex-grow: 1;
}
.circle{
  max-width:10%;
  flex-wrap:nowrap;
  border-radius:50%;

}
</style>
