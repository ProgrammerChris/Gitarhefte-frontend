<template>
  <header>
    <a href="javascript:void(0);" class="icon" @click="open()">&#9776;</a>
    <nav id="nav" class="nav">
      <router-link class="menu-item" to="/">Hjem</router-link>
      <router-link class="menu-item" to="/om">Om</router-link>
      <router-link class="menu-item" to="/artister">Artister</router-link>
    </nav>
    <router-link to="/">
      <h1 id="logo"><strong>G</strong>itarhefte</h1>
    </router-link>
    <router-link id="booklet" to="/hefte">
      <img src="@/assets/booklet.svg" height="35" width="35" alt="profil">
    </router-link>
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
nav a.router-link-exact-active {
  font-weight: bold;
}
#logo {
  grid-row: 1;
  grid-column: 2;
}
#booklet {
  grid-row: 1 / span 2;
  grid-column: 3;
  justify-self: center;
  align-self: center;
  cursor: pointer;
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
#nav {
  transition: all 0.5s, opacity 1s ease;
}
.nav {
  grid-row: 2;
  grid-column: 1 /span 3;
  visibility: hidden;
  opacity: 0;
  padding: 0;
  max-height: 0;
}
.navopen {
  grid-row: 2;
  grid-column: 1 /span 3;
  opacity: 1;
  visibility: visible;
  display: block;
  max-height: 300px;
  padding: .5em 0em 1em 0em;
}
.menu-item:hover {
  text-decoration: underline;
}
@media screen and (min-width: 600px) {
  #nav {
    opacity: 1;
    display: block;
    visibility: visible;
    max-height: 300px;
    padding: .5em 0em 1em 0em;
  }
  .icon {
    visibility: hidden;
  }
}
</style>