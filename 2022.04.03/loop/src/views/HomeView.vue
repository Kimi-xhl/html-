<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="showAlert">
    <p :class="{title:false}">{{ p | before }}</p>
    <p>{{ p1  }}</p>
    <p>{{ name }}</p>
    <Carsrd></Carsrd>
    <Modal title="ddd" :display="modalShow" ></Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal";
import Carsrd from "@/components/Carsrd";
export default {
  name: 'HomeView',
  components: {
    Carsrd,
    Modal
  },
  computed: {
    name() {
      return this.p + this.p1
    }
  },
  filters: {
    before: function (value) {
      return 'this is ' + value;
    }
  },
  data() {
    return {
      p: 'sdsddd',
      p1: '111',
      modalShow: false
    }
  },
  methods: {
    showAlert() {
      this.modalShow = !this.modalShow
      this.p = '1563615'
    }
  }
}
</script>
