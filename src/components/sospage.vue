<template>
  <div class="flex-column" style="background:blue">
        <div class="bigimage"></div>
        <div style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
          <p> Are you in crisis?</p>
          <p><b> You are not alone. Help is just a call away. </b></p>

        <nav>
          <ul>
          <li>
              Grounding for Panic
              <span></span><span></span><span></span><span></span>
          </li>
          </ul>
        </nav>
       </div>
        <hr style="width:50%;height:2px;background-color:gray">
        <p>
          If you are dealing with abuse, trauma or crisis, WeCare is not enough. It is important that you talk to a person you feel safe sharing what you are going through. If there is no one, call of one the helplines below. 
          <br><br> <b>Things will get better!</b>
        </p>
  <div>
    <nav>
          <ul>
          <li>
              Contact Guardian
              <span></span><span></span><span></span><span></span>
          </li>
          </ul>
    </nav>
  </div>
  <div>
    <nav>
          <ul>
          <li>
              <a :href="urlsuicide" target="_blank">Suicide Prevention</a>
              <span></span><span></span><span></span><span></span>
          </li>
          </ul>
    </nav>
  </div>
  <div>
    <nav>
          <ul>
          <li>
              <a :href="urlwomen" target="_blank">Women Helpline </a>
              <span></span><span></span><span></span><span></span>
          </li>
          </ul>
    </nav>
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
      urlwomen: "https://indianhelpline.com/WOMEN-HELPLINE/",
      urlsuicide: "http://www.aasra.info/helpline.html",
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

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    --c:#005b96;
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
