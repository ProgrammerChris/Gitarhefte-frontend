<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/artister">Artister</router-link> |
    <router-link to="/booklets">Hefter</router-link>
  </div>
  <router-view />
</template>

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
  height: 100%;
  background-color: var(--blackish);
}
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
