<template>
  <div class="flex-column" style="background:blue">
      <div>
      hello this is sos page
      </div>
  <div>
  lets play
  </div>
  </div>

</template>

<script>
export default {
  name: 'Sospage',
  props: {
    user: String
  },
  data(){
    return {

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
