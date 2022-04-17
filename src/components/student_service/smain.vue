<template>
  <div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: "smain",
  data(){
    return{
      isRouterAlive:true,
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function (){
        this.isRouterAlive = true;
      })
    }
  },
  provide(){
    return{
      reload:this.reload()
    }
  }
}
</script>

<style scoped>

</style>