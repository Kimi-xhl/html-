<template>
  <div class="home">
    <div class="display">
      <div class="sub">65+3</div>
      <div class="main">56</div>
    </div>
    <div class="keyboard">
      <div class="btn_group" @mousedown="btnDown" @mouseup="btnUp">
        <div v-for="(item,index) in list" :key="index" class="btn">
          {{ item }}
        </div>
      </div>
      <div class="op">
        <div class="btn opBtn" v-for="(item,index) in oplist" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list: ['7','8','9','4','5','6','1','2','3','+/-','0','.'],
      oplist: ['x','-','+'],
      current: ''
    }
  },
  methods: {
    btnDown(e) {
      this.current = e.target
      e.target.classList.add('btnDown')
    },
    btnUp(e) {
      console.log(e)
      this.current.classList.remove('btnDown')
    }
  },
}
</script>

<style scoped lang="scss">
.home{
  border: 1px solid #000;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,.4);
  background-color: rgb(230,230,230);
  width: 400px;
  .display{
    padding: 10px 10px;
    text-align: right;
    .sub{
      color: rgb(92,92,92);
    }
    .main{
      font-weight: bolder;
      font-size: 40px;
    }
  }
}
.keyboard{
  padding: 2px;
  display: flex;
  .btn_group{
    flex: 3;
    display: flex;
    flex-wrap: wrap;
  }
  .op{
    flex: 1;
  }
}
.btn{
  width: calc(33.3% - 1.9px);
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #FAFAFA;
  font-size: 22px;
  margin-right: 2px;
  margin-bottom: 2px;
  &:hover{
    background-color: rgb(209,209,209);
  }
}

.opBtn{
  width: 100%;
  background-color: rgb(240,240,240);
}

.btnDown{
  background-color: rgb(187,187,187) !important;
}
</style>
