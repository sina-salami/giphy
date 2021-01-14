<template>
  <div>
    <div id="searchWrapper">
      <input
        id="input"
        placeholder="Search for gifs..."
        :value="searchValue"
        @input="changeSearch"
      />
      <router-link id="btn" tag="button" :to="{ path: '/search' }">
        <span @click="search" id="searchTxt">Search</span>
      </router-link>
    </div>
    <div>
      <Carousel :gifs="trending" title="Trending" />
      <Carousel :gifs="newOffer" title="New Offers" />
    </div>
  </div>
</template>

<script>
import Axios from "axios";

import Carousel from "../components/Carousel";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Carousel,
  },
  data: () => ({
    trending: [],
    newOffer: [],
  }),
  computed: {
    ...mapGetters({ searchValue: "search" }),
  },
  mounted() {
    Axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "kpnytC5FlVe8oVqn27CaDDGCMS1zjLLi",
        limit: 20,
      },
    })
      .then((res) => {
        this.trending = res.data.data.filter((_, index) => index < 10);
        this.newOffer = res.data.data.filter(
          (_, index) => index >= 10 && index < 20
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    search: function () {
      this.addHistory(this.searchValue);
    },
    ...mapMutations(["changeSearch", "addHistory"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:wght@300,400,500");
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
  background: linear-gradient(90deg, #f4442e 0%, #3423a6 100%);
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  cursor: pointer;
}
#btn:hover {
  background: linear-gradient(90deg, #f4442e 0%, #3423a6 170%);
}
#searchTxt {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
