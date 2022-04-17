<template>
  <div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: "amain",
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