<template>
  <header>
    <Navbar id="navbar"/>
      <h1 id="logo"><strong>G</strong>itarhefte</h1>
      <div id="profile">
        <img src="@/assets/user.svg" height="35" width="35" alt="profil">
      </div>
  </header>
  <router-view />
  <div id="circle">
    <div id="inner-triangle">
    <div id="outer-triangle"></div> 
  </div>
  <Footer/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

html {
  /* Color theme */
  --blackish: #343434;
  --dark-gray: #3F3F3F;
  --medium-gray: #707070;
  --egg-yellow: #FFDF6C;
  --light: #FEFEFE;
}
body {
  background-color: var(--blackish);
  margin: 0;
}
h1 strong {
  font-size: 3.2rem;
}

h1 {
  color: var(--blackish);
  margin: 0;
}
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 5em auto 5em;
  background-color: var(--light);
}
#circle {
  position: fixed;
  left: -4rem;
  bottom: -4rem;
  background-color: #FEFEFE;
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
}
#inner-triangle {
  position: relative;
  width: 0; 
  height: 0; 
  top: 3rem;
  left: 7rem;
  border-left: 1.5rem solid transparent;
  border-right: 1.5rem solid transparent;
  border-bottom: 3rem solid #343434;
}
#outer-triangle {
  position: relative;
  top: -2.5rem;
  left: -0.8rem;
  width: 0; 
  height: 0; 
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  border-bottom: 5rem solid #FFDF6C;
}
#logo {
  grid-row: 1;
  grid-column: 2;
}
#profile {
  grid-row: 1;
  grid-column: 3;
  justify-self: center;
  align-self: center;
}

</style>
