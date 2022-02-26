<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <vue-qr text="四点阿斯顿阿斯顿爱上了发哈sold能否考虑是的阿斯顿打死了你的 " :size="200" :margin="30" :white-margin="true" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vueQr from 'vue-qr'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    vueQr
  }
}
</script>
