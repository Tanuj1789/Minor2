<template>
  <div class="flex-column">
    <div class="flex-column" >
      <p> Selfcare Guide </p>
      <div class="flex-row space-between">
        <img src="@/assets/logo.png" class="circle border-r "/>
        <img src="@/assets/logo.png" class="circle border-r"/>
        <img src="@/assets/logo.png" class="circle border-r">
        <img src="@/assets/logo.png" class="circle border-r"/>
        <img src="@/assets/logo.png" class="circle border-r"/>
        </div>
         <p> My  4 AM FRIEND </p>
      <div class="flex-row">
        <div class="bigimage"></div>
        <b-button pill variant="success" style="display:flex;width:50%;height:20%;align-self:center;justify-content:center;">Start A chat</b-button>
      </div>
    </div>
    <div class="flex-column" >
      My Therapist
      <div class="flex-row">
        <img src="@/assets/logo.png"/>
        <div class="flex-column">
        {{schedule}}
        <b-button variant="outline-success" style="display:flex;width:80%;height:30%;align-self:center;justify-content:center;align-items:center;">Book Session </b-button>
        </div>
      </div>
      {{Therapist}}
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
  border: solid 1px black;
  border-radius:50%;
  padding:1%;
}
.bigimage{
  background-image: url('D:\\Programming\\minorv1\\src\\assets\\panda.png');
  background-repeat: no-repeat;
  height:400px;
  width:400px;
}
.bigimage:hover{
  transform:scale(1.2);
  transition-duration: 1s;
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
