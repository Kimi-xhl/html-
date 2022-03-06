<template>
  <div>
    this is myVue <br>
    <div v-text="lang"></div>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        {{ `姓名：${item.name} 年龄：${item.age}` }}
      </li>
    </ul>
    <router-link to="/dashboard">跳转仪表盘</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: '中文',
      list: [
        {
          name: '小米',
          age: 15
        },
        {
          name: 'xsd',
          age: 20
        },
        {
          name: '小红',
          age: 31
        },
        {
          name: 'pdd',
          age: 40
        }
      ]
    }
  },
}
</script>

<style>

</style>
