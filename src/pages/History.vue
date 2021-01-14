<template>
  <ol id="wrapper">
    <li v-for="h in history" v-bind:key="h" id="item">
      {{ h }}
    </li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["history"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:wght@300,400,500");
#wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#item {
  color: #fff;
  text-align: center;
  margin-top: 20px;
}
</style>
