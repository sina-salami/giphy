<template>
  <div>
    <h2 id="carouselTitle">{{ title }}</h2>
    <div id="carousel">
      <img
        v-for="gif in gifs"
        v-bind:key="gif.id"
        :alt="gif.title"
        :src="gif.images.fixed_height.url"
        id="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    gifs: Array,
    title: String,
  },
};
</script>

<style scoped>
#img {
  margin-right: 10px;
  min-height: 200px;
}
#img:nth-child(even) {
  background: blue;
}
#img:nth-child(odd) {
  background: red;
}
#carousel {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
}
#carouselTitle {
  color: #c59f44;
  margin-left: 50px;
}
</style>
