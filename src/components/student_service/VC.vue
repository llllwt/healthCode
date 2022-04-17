<template>
  <div>
    <div style="margin-top: 40px;text-align: center">
      <div style="font-family: 幼圆;color: Blue;font-size: 25px;margin-bottom: 20px">
        健康码
      </div>
      <el-image style="height: 200px;width: 200px" :src="code.src"></el-image>
      <div style="font-family: 幼圆;color: Black;font-size: 15px;margin: 30px">
        姓名:{{ code.name }}
      </div>
      <div style="font-family: 幼圆;color: Black;font-size: 15px">
        学号:{{code.id}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"VC",
  data(){
    return{
      code:{
        src:'',
        name:'',
        id:'',
        color:'',
      }
    };
  },
  methods:{

  },
  mounted() {
    let t = this;
    let id = t.$store.getters.get_id
    let s ={id:id}
    if(t.$store.getters.get_role === 'student'){
      t.$axios.post('http://localhost:8081/healthycode/getcode', s).then(res=>{
        t.code.src = 'data:image/png;base64,' + res.data.data.src
        t.code.name= res.data.data.name
        t.code.id= res.data.data.id
        t.code.color= res.data.data.color
        t.$store.commit('set_color',t.code.color)
      })
    }
  }
}
</script>
<style scoped>

</style>