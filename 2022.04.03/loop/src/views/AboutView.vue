<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Modal :display="modalShow"></Modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal";
export default {
  name: 'AboutView',
  components: { Modal },
  data() {
    return {
      modalShow: true,
    }
  },
}
</script>
