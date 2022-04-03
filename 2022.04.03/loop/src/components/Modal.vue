<template>
  <div v-if="display">
    <div class="cover"  @click="clickCover()"></div>
    <div class="Modal" style="width: 400px; height: 200px">
      <div class="header">
        <p>{{ title  }}</p>
      </div>
      <div class="main"></div>
      <div class="footer"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: 'this is title', // 默认值
    },
    display: {
      type: Boolean,
      required: true // 是否必填
    }
  },
  created() {
    console.log(this.display)
  },
  methods: {
    clickCover() {
      this.$parent.modalShow = false
    }
  },
}
</script>

<style scoped>
.Modal{
  background-color: #fcfbfb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
}
.cover{
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
