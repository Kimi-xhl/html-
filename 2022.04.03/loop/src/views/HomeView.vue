<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button type="primary" @click="showAlert">修改p1值</el-button>
    <p :class="{title:false}">{{ p | before }}</p>
    <p>{{ p1  }}</p>
    <p>{{ name }}</p>
    <Carsrd></Carsrd>
    <Modal
        title="title"
        :display="modalShow"
        @ddd="ss">
      <h3>this is title</h3>
      <h3>this is title</h3>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal";
import Carsrd from "@/components/Carsrd";
import { a } from '@/utils/utils'
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
  created() {
    a(10000)
  },
  methods: {
    showAlert() {
      this.modalShow = !this.modalShow
      this.p = '1563615'
    },
    ss(val){
      const h = this.$createElement;
      this.p1 = val
      this.$notify({
        title: '事实上',
        message: h('i', { style: 'color: teal'}, '修改成功')
      });
    }
  }
}
</script>
