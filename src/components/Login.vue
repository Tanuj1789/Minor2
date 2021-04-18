<template>
  <div class="flex-column" >
      <div>
      <h3> Sign-in</h3>
      <form @submit.prevent="addEmail()" class="flex-column">
      <input type="text" v-model="name"/>
      <input type="email" v-model="email"/>
      <button> Submit </button>
      </form>
      </div>
      <div v-for="pname in listofnames" v-bind:key="pname.email">
      {{ pname.name }}
      <div>
      {{listofnames}}
    </div>
  </div>
  <App username="name"/>
  </div>
</template>

<script>
import App from '../App.vue'
import { names, auth } from "../firebase";
export default {
  name: 'Login',
  components:{
      App,
  },
  data(){
    return {
        email:"",
        name:"",
        msg:"",
        listofnames: [],

    }
  },
  methods:{
      addEmail(){
            auth.createUserWithEmailAndPassword(this.email, "1234567").then(
        (user) => {
            this.usernm=this.name;
          console.log(user);
            // this.name + ", your review has been successfully added";
          names.push({
            name: this.name,
            email: this.email,
          });
        },
        (err) => {
          this.msg = err;
        }
      );
      var p = [{ name: "", email: "" }];
      names.on("value", function (snapshot) {
        snapshot.forEach(function (childsnapshot) {
          var data = childsnapshot.val();
          // console.log(data.email,data.name);
          p.push({ name: data.name, email: data.email });
          // console.log(p)
        });
      });
      this.listofnames = p;
      // console.log('lois',this.listofnames);
      p = [];

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

</style>
