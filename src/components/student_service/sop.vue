<template>
  <div>
    <el-row style="height: 290px">
      <el-col :span="6" style="padding: 2px;height: 290px" offset="2">
        <div class="option">
          <el-image :src="GC" class="images" fit="contain"></el-image>
          <div class="op" @click="toGC">
            &nbsp健康码申领<br>
            <div style="font-size: 20px">&nbsp&nbspGet health code</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="HP" class="images" fit="contain"></el-image>
          <div class="op" @click="toHP">
            &nbsp健康打卡<br>
            <div style="font-size: 20px">&nbsp&nbspHealth Punch</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="BS" class="images" fit="contain"></el-image>
          <div class="op" @click="toBS">
            &nbsp返校申请<br>
            <div style="font-size: 20px">&nbsp&nbspBack to school</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px;height: 290px">
      <el-col :span="6" style="padding: 2px;height: 290px" offset="2">
        <div class="option">
          <el-image :src="VC" class="images" fit="contain"></el-image>
          <div class="op" @click="toVC">
            &nbsp健康码查看<br>
            <div style="font-size: 20px">&nbsp&nbspView health code</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="PH" class="images" fit="contain"></el-image>
          <div class="op" @click="toPH">
            &nbsp打卡历史<br>
            <div style="font-size: 20px">&nbsp&nbspPunch history</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="LS" class="images" fit="contain"></el-image>
          <div class="op" @click="toLS">
            &nbsp出入校园<br>
            <div style="font-size: 20px">&nbsp&nbspLeave school</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HP from '@/assets/HP.png'
import GC from '@/assets/GC.png'
import VC from '@/assets/VC.png'
import PH from '@/assets/PH.png'
import LS from '@/assets/LS.png'
import BS from '@/assets/BS.png'
export default {
  name:"sop",
  data(){
    return{
      HP,
      GC,
      VC,
      PH,
      LS,
      BS,
      student:{
        name:'',
        id:'',
        idcard:'',
        college:'',
        code:''
      }
    };
  },
  methods:{
    toBS(){
      let t = this
      t.$axios.post('http://localhost:8081/student/isapply',{id:t.$store.getters.get_id}).then(res=>{
        if(res.data.code == 200){
          t.$router.push({name: 'BS'})
        }else {
          t.$alert('当前有申请未审批，请等待审批','提示',{
            confirmButtonText:'确定'
          })
        }
      })
    },
    toGC(){
      let t = this
      if(t.$store.getters.get_color === '无'){
        this.$router.push({name: 'GC',})
      }else{
        t.$alert('已经拥有健康码','无法重复申请',{
          confirmButtonText: '确定',
        })
      }

    },
    toHP(){
      let t = this
      t.$axios.post('http://localhost:8081/student/isdaily',{id:t.$store.getters.get_id}).then(res=>{
        if(res.data.code == 200){
          t.$router.push({name: 'HP'})
        }else {
          t.$alert('今日已完成打卡','提示',{
            confirmButtonText:'确定'
          })
        }
      })

    },
    toLS(){
      let t = this
      t.$axios.post('http://localhost:8081/student/isapply',{id:t.$store.getters.get_id}).then(res=>{
        if(res.data.code == 200){
          t.$router.push({name: 'LS'})
        }else {
          t.$alert('当前有申请未审批，请等待审批','提示',{
            confirmButtonText:'确定'
          })
        }
      })
    },
    toPH(){
      this.$router.push({name: 'PH'})
    },
    toVC(){
      let t = this
      if(t.$store.getters.get_color === '无'){
        t.$alert('未申请健康码','无法查看',{
          confirmButtonText: '确定',
        })
      }else {
        this.$router.push({name: 'VC',query:{id:t.$route.query.id}})
      }

    }

  },
  mounted() {
    let t =this
    let id = t.$route.query.id
    let s ={id:id}
    if(t.$store.getters.get_role === 'student'){
      t.$axios.post('http://localhost:8081/student/id', s).then(res=>{
        t.student = res.data.data
        t.$store.commit('set_name',t.student.name)
        t.$store.commit('set_idcard',t.student.idcard)
        t.$store.commit('set_college',t.student.college)
        if(res.data.data.color){
          t.$store.commit('set_color',res.data.data.color)
        }else {
          t.$store.commit('set_color','无')
        }

      })
    }
  }
}
</script>
<style scoped>
.option{
  position: relative;
  height: 290px;
  /*width: 466px;*/
}
.images{
  width: 100%;
  height: 100%;
  border-radius: 25px;
  box-shadow: -10px -10px 5px rgba(0, 0, 0, .12)
}
.op{
  padding-top: 10px;
  width: 100%;
  background:rgba(255,0,0,0.4);
  position: absolute;
  z-index: 2;
  left: 0;
  top: 223px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: 幼圆;
  color: ghostwhite;
  font-size: 30px;
}
</style>