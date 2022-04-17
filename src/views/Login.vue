<template>
  <div>
    <el-row type="flex"  justify="center" style="margin-top: 100px">
      <el-col :span="10" :offset="2">
         <el-image :src="bg"></el-image>
      </el-col>
      <el-col :span="8" :offset="2" style="padding-top: 20px">
        <div class="panel panel-default login-body" style="border-radius: 30px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12)">
          <el-select v-model="role" placeholder="用户" clearable style="margin-left: 60px;margin-bottom: 20px">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm0" class="demo-ruleForm" label-width="60px" >
            <el-form-item label="工 号:" prop="id" class="login-font">
              <el-input  placeholder="工号/学号" clearable v-model="ruleForm.id" prefix-icon="el-icon-user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密 码:" prop="password" class="login-font">
              <el-input  placeholder="密码" show-password v-model="ruleForm.password" prefix-icon="el-icon-lock" auto-complete="off" @keyup.enter.native="login(ruleForm.mnumber,ruleForm.pw)"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="submit"  :plain="true" icon="el-icon-success" class="login-font" @click="login(ruleForm.id,ruleForm.password)" style="background-color: aliceblue;padding: 6px;">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bg from '../assets/login.png'
export default {
  name: "Login",
  data() {
    const checknumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('工号不能为空'));
      } else callback();
    };
    const checkPw = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    };
    return {
      bg,
      options: [{
        value: 'student',
        label: '学生'
      }, {
        value: 'admin',
        label: '管理员'
      }],
      role:'',
      ruleForm:{
        password: '',
        id: '',
      },
      rules:{
        id: [
          {validator: checknumber, trigger: 'change'}
        ],
        password: [
          {validator: checkPw, trigger: 'change'}
        ]
      },
    };
  },
  methods: {
    login(id,pw){
      let t = this;
      if(this.role == 'student') {
        t.$axios.post('http://localhost:8081/student_login',t.ruleForm).then(res=>{
          if(res.data.code === 400){
            let mes = res.data.msg;
            t.$alert(mes, '登陆失败', {
              confirmButtonText: '确定',
            })
          } else {
            this.$store.commit('set_id',id)
            this.$store.commit('set_role',t.role)
            this.$router.push({name: 'sop',query:{id:id}})
          }
        })
      } else {
        t.$axios.post('http://localhost:8081/admin_login',t.ruleForm).then(res=>{
          if(res.data.code === 400){
            let mes = res.data.msg;
            t.$alert(mes, '登陆失败', {
              confirmButtonText: '确定',
            })
          } else {
            this.$store.commit('set_id',id)
            this.$store.commit('set_role',t.role)
            this.$router.push({name: 'aop'})
          }
        })
      }
    }


  }
}
</script>

<style scoped>
.login-body {
  padding: 40px 40px 20px 40px;
  width: 400px;
  height: 300px;
  box-sizing: border-box;
}
.login-font{
  font-family: "幼圆", Times, serif;
  font-style:normal;
  font-size: 100%;
}
</style>