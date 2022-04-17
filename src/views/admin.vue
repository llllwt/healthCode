<template>
  <div>
    <el-container style="height: 700px">
      <el-header class="header">
        <el-row>
          <el-col :span="1" style="padding:5px;">
            <el-image :src="home" @click="toaop"></el-image>
          </el-col>
          <el-col :span="2" style="height:46px;padding-top: 9px">
            <div style="font-family: 幼圆;color: white;font-size: 25px">山东大学</div>
          </el-col>
          <el-col :span="4" style="height:46px;padding-top: 17px">
            <div style="font-family: 幼圆;color: white;font-size: 15px">健康信息管理系统</div>
          </el-col>
          <el-col :span="2" offset="14" style="height:46px;padding-top: 9px">
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
      <el-main>
        <amain></amain>
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
import amain from '@/components/admin_service/amain'
export default {
  name: "admin",
  components:{
    amain
  },
  data() {
    return {
      home,
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
    toaop(){
      this.$router.push({name: 'aop'})
    },
    logout(){
      this.$router.push({name: 'Login'})
    },
    change(){
      let t =this
      t.form.id = t.$store.getters.get_id
      if(t.form.newpassword !== t.form.confirm){
        t.$alert('两次密码输入不一致','错误提示',{
          confirmButtonText: '确定'
        })
      }else {
        t.$axios.post('http://localhost:8081/manager/changepw',t.form).then(res=>{{
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


  }
}
</script>

<style scoped>
.header {
  height: 46px !important;
  padding: 0px;
  background-color: mediumblue;
}
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
  background:rgba(255,0,0,0.2);
  position: absolute;
  z-index: 2;
  left: 0;
  top: 223px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: 幼圆;
  color: white;
  font-size: 30px;
}
</style>