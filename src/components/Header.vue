<template>
  <header>
    <a href="javascript:void(0);" class="icon" @click="open()">&#9776;</a>
    <nav id="nav" class="nav">
      <router-link class="menu-item" to="/">Hjem</router-link>
      <router-link class="menu-item" to="#">Om</router-link>
      <router-link class="menu-item" to="/artister">Artister</router-link>
      <router-link class="menu-item" to="#">Sanger</router-link>
    </nav>
    <h1 id="logo"><strong>G</strong>itarhefte</h1>
    <div id="profile">
      <img src="@/assets/user.svg" height="35" width="35" alt="profil">
    </div>
  </header>
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
  cursor: pointer;

}
#nav-bar {
  grid-column: 1;
  justify-self: center;
  align-self: center;
}
.nav {
  grid-row: 2;
  grid-column: 1 /span 3;
  visibility: hidden;
  opacity: 0;
  height: 0;
  padding: 0;
  transition: all .4s ease;
}
.navopen {
  grid-row: 2;
  grid-column: 1 /span 3;
  opacity: 1;
  visibility: visible;
  display: block
}
@media screen and (min-width: 600px) {
  .nav {
    opacity: 1;
    visibility: visible;
    display: block;
    height: auto;
    padding-bottom: 1em;
  }
  .icon {
    visibility: hidden;
  }
}
</style>