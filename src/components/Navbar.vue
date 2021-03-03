<template>
    <a href="javascript:void(0);" class="icon" @click="open()">&#9776;</a>
    <nav id="nav" class="nav">
      <router-link class="menu-item" to="/">Hjem</router-link>
      <router-link class="menu-item" to="#">Om</router-link>
      <router-link class="menu-item" to="/artister">Artister</router-link>
      <router-link class="menu-item" to="#">Sanger</router-link>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    open() {
      let nav = document.getElementById("nav");
      if (nav.className === "nav") {
        nav.className += "open";
      } else {
        nav.className = "nav";
      }

    }
  }
}
</script>

<style>
nav {
  text-align: center;
  transition: 0.4s;
  padding-bottom: 1em;
}

a {
  text-decoration: none;
  color: var(--blackish);
}
nav a {
  padding: 0 1em;
}
.icon {
  justify-self: center;
  align-self: center;
  font-size: 2em;
}
#nav-bar {
  grid-column: 1;
  justify-self: center;
  align-self: center;
}
.nav {
  grid-row: 2;
  grid-column: 1 /span 3;
  display: none;
}
.navopen {
  grid-row: 2;
  grid-column: 1 /span 3;
  display: block;
}
@media screen and (min-width: 600px) {
  .nav {
    display: block;
  }
  .icon {
    display: none;
  }
}
</style>