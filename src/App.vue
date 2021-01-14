<template>
  <div id="app">
    <h1 id="header">GIPHY</h1>
    <router-view />
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:wght@300,400,500");
#app {
  width: 100vw;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
}
#header {
  background: -webkit-linear-gradient(#f4442e 0%, #3423a6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  align-self: center;
}
</style>
