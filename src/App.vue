<template>
  <div id="app">
  <div class="flex-row">
  <div>
    <nav>
           <ul>
         <li>
     <router-link to="/Login" class=""> {{username}} space </router-link>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>


  </div>
  <div>
    <nav>
           <ul>
         <li>
      SOS
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
    </div>
  </div>
  <hr style="height:2px colour:black">
  <router-view> </router-view>

     <div class="flex-row" >
      <!-- <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle">
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/> -->
    </div>
  </div>

</template>

<script>
// import Sospage from './components/sospage.vue'
export default {
  name: 'App',
  components: {
    // Sospage,
  },
  data(){
    return {
      username:"dpt's"
    }
  },
  methods :{
    
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
  margin-left:25%;
  margin-right:25%;
  background: #70e1f5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffd194, #70e1f5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
  max-width:60%;
  flex-wrap:nowrap;
  border-radius:50%;

}
body{
  background: #ee0979;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    --c:#a24857;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    color:black;

    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
}

nav ul li span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

nav ul li:hover {
    color: white;
}

nav ul li:hover span {
    transform: translateY(0) scale(2);
}

nav ul li span:nth-child(1) {
    --n: 1;
}

nav ul li span:nth-child(2) {
    --n: 2;
}

nav ul li span:nth-child(3) {
    --n: 3;
}

nav ul li span:nth-child(4) {
    --n: 4;
}
</style>
