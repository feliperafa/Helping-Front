<template>
 <div class="q-pa-sm img">
    <div class="q-col-gutter-sm row items-start">
      <div class="col">
        <q-img
          src="../../assets/anuncio.png"
          style="width: 50%"
          native-context-menu
          v-for="(imgs, index) in 4" :key="index"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <a href="/">Anuncie Conosco!</a>
          </div>
        </q-img>
      </div>
      </div>
      </div>
</template>
<style lang="stylus" scoped>
.img {
  background-image: linear-gradient(to right, white, grey);
  }
</style>
