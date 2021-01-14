<template>
  <div>
    <div id="searchWrapper">
      <input
        id="input"
        placeholder="Search for gifs..."
        :value="searchValue"
        @input="changeSearch"
      />
      <button id="btn" @click="search">Search</button>
      <router-link id="btn" tag="button" :to="{ path: '/history' }"
        >History</router-link
      >
    </div>
    <h2 v-if="searchValue" id="resultsHeader">Results</h2>
    <div id="results" v-if="searchRes">
      <img
        v-for="res in searchRes"
        :key="res.id"
        :alt="res.title"
        :src="res.images.fixed_height.url"
        id="img"
      />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchRes: [],
    };
  },
  computed: {
    ...mapGetters({ searchValue: "search" }),
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function () {
      Axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "kpnytC5FlVe8oVqn27CaDDGCMS1zjLLi",
          q: this.searchValue,
          limit: 15,
        },
      })
        .then((res) => {
          this.searchRes = res.data.data;
          this.addHistory(this.searchValue);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ...mapMutations(["changeSearch", "addHistory"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:wght@300,400,500");
#header {
  text-align: center;
  font-weight: 500;
  background-image: linear-gradient(90deg, #f4442e, #3423a6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
}
#searchWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#input {
  height: 50px;
  border: none;
  border-radius: 10px;
  width: 50%;
  align-self: center;
  padding: 0 10px;
  outline: none;
  font-family: Montserrat;
}
#btn {
  height: 50px;
  width: 10%;
  border-radius: 10px;
  margin-left: 10px;
  border: none;
  outline: none;
  background-image: linear-gradient(90deg, #f4442e, #3423a6);
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
}
#results {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
#resultsHeader {
  color: #c59f44;
  margin-left: 50px;
}
#img {
  margin: 10px 10px 0 0;
  min-height: 200px;
}
</style>
