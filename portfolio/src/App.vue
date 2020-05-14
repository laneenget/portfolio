<template>
  <div id="app">

      <NavBar></NavBar>
      <transition name="moveInUp">
         <router-view></router-view>
      </transition>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  components: {
    NavBar,
    Home,
    About,
    Contact
  },
  methods: {
    
  }
}
</script>

<style>
body {
    position: relative;
    background-color:  #193D49;
    font-family: 'Exo 2', sans-serif;
    margin: 0px 0px 0px 0px;
}

.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

</style>
