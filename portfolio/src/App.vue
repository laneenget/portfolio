<template>
  <div id="app">

      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Contact></Contact>

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


</style>
