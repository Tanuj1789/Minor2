<template>
  <div class="flex-column">
    <div class="flex-column" >
      <p> Selfcare Guide </p>
      <div class="flex-row space-between" style="flex-wrap:wrap">
        <div class="flex-column">
            <div><img src="@/assets/2nd image.jpeg" class="circle border-r"/></div>
             <div> <p> Meditation </p></div>
        </div>
        <div class="flex-column">
            <div><img src="@/assets/3rd image.jpeg" class="circle border-r"/></div>
             <div> <p> Remote Wellness </p></div>
        </div>
        <div class="flex-column">
            <div><img src="@/assets/Stress.jpg" class="circle border-r"/></div>
             <div> <p> Stress </p></div>
        </div>
        <div class="flex-column">
            <div><img src="@/assets/sleep.jpeg" class="circle border-r"/></div>
             <div> <p> Sleep </p></div>
        </div>
      <hr style="width:80%;height:2px;background-color:gray">

        </div>
         <p> My  4 AM FRIEND </p>
      <div class="flex-row" style="min-width:100%;">
        <div class="bigimage"></div>
        <div style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
        <nav>
           <ul>
         <li>
      Start a Chat
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
        </div>;
      </div>
    </div>
    <br>
    <hr style="width:50%;height:2px;background-color:gray">
    <div class="flex-column" >
      My Therapist
      <div class="flex-row">
        <!-- <img src="@/assets/logo.png"/>
        <div class="flex-column">
        {{schedule}}
        <b-button variant="outline-success" style="display:flex;width:100%;height:30%;align-self:center;justify-content:center;align-items:center;color:pink">Book Session </b-button>
        </div>
      </div>
      {{Therapist}} -->
      <div class="flex-row" style="min-width:100%;">
        <div class="bigimage"></div>
        <div style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
        <!-- <b-button pill variant="success" >Start A chat</b-button> -->
         <nav>
           <ul>
         <li>
      Book Session
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
        </div>;
      </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'Home',
  props: {
    user: String
  },
  data(){
    return {
      schedule:"no upcoming",
      Therapist:"not assigned"
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex-column{
  display:flex;
  flex-direction:column;
  flex-grow: 1;
  justify-content: space-around;
}
.border-r{
  border: solid 3px black;
  border-radius:50%;
  opacity:0.7;
  max-width:25%;

  /* padding:1%; */
}
.bigimage{
  background-image: url('D:\\Programming\\minorv1\\src\\assets\\panda.png');
  background-repeat: no-repeat;
  min-height:40vh;
  min-width:20% ;
  flex-grow:2;
}
.bigimage:hover{
  transform:scale(1.2);
  transition-duration: .2s;
  filter:drop-shadow(-5px 0px 5px chartreuse);
}
.flex-end{
  justify-content: flex-end;
}
.space-between{
    display:flex;
    justify-content: space-around;
    flex-grow:1;
}


</style>
