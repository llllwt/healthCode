<template>
  <div>
    <el-container style="height: 700px">
      <el-header class="header">
        <el-row>
          <el-col :span="1" style="padding:5px;">
            <el-image :src="home" @click="tosop"></el-image>
          </el-col>
          <el-col :span="2" style="height:46px;padding-top: 9px">
            <div style="font-family: 幼圆;color: white;font-size: 25px">山东大学</div>
          </el-col>
          <el-col :span="4" style="height:46px;padding-top: 17px">
            <div style="font-family: 幼圆;color: white;font-size: 15px">健康信息管理系统</div>
          </el-col>
          <el-col :span="1" offset="13">
            <el-badge :is-dot='nm' class="item">
              <el-image :src="message" @click="check"></el-image>
            </el-badge>
          </el-col>
          <el-col :span="2"  offset="0.5" style="height:46px;padding-top: 9px">
            <el-row>
              <el-col :span="18">
                <el-button size="mini" @click="dialogFormVisible = true">修改密码</el-button>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" @click="logout">退出</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="padding: 20px 70px 0px 70px;height: 650px">
        <smain></smain>
      </el-main>
    </el-container>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="400px">
      <el-form :model="form">
        <el-form-item label="旧密码: " label-width="100px">
          <el-input v-model="form.oldpassword" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="新密码: " label-width="100px">
          <el-input v-model="form.newpassword" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认新密码: " label-width="100px">
          <el-input v-model="form.confirm" autocomplete="off" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="change">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import home from '../assets/home.png'
import smain from '@/components/student_service/smain'
import sop from '@/components/student_service/sop'
import message from '@/assets/message.png'
export default {
  name: "student",
  components:{
    smain,
    sop
  },
  data() {
    return {
      home,
      message,
      nm:false,
      mes:'无消息',
      form:{
        oldpassword:'',
        newpassword:'',
        confirm:'',
        id:''
      },
      dialogFormVisible:false
    };
  },
  methods: {
    tosop(){
      this.$router.back()
    },
    logout(){
      this.$router.push({name: 'Login'})
    },
    check(){
      let t =this
      if(t.nm){
        this.$alert('你的'+t.mes,'通知',{
          confirmButtonText:'确定'
        })
      }
     t.nm = false
    },
    change(){
      let t =this
      t.form.id = t.$store.getters.get_id
      if(t.form.newpassword !== t.form.confirm){
        t.$alert('两次密码输入不一致','错误提示',{
          confirmButtonText: '确定'
        })
      }else {
        t.$axios.post('http://localhost:8081/student/changepw',t.form).then(res=>{{
          if(res.data.code === 200){
            t.$alert('修改成功','修改成功',{
              confirmButtonText: '确定'
            })
            t.dialogFormVisible = false
          }else {
            t.$alert(res.data.msg,'错误提示',{
              confirmButtonText: '确定'
            })
          }
        }})
      }
    }


  },
  mounted() {
    let t =this
    let id = {id:this.$store.getters.get_id}
    this.$axios.post("http://localhost:8081/student/apply",id).then(res=>{
      if(res.data.data){
        t.mes = res.data.data.t
        t.nm = true
        if (res.data.data.pass === "0"){
          t.mes += "未通过"
        }else {
          t.mes+= "已通过"
        }
      }
    })
  }
}
</script>

<style scoped>
.header {
  height: 46px !important;
  padding: 0px;
  background-color: mediumblue;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>