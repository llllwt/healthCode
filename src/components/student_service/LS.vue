<template>
<div>
  <el-form ref="form" :model="form" style="width: 600px;margin-left: 389.6px" class="demo-ruleForm">
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_name"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row >
            <div>姓名</div>
          </el-row>
          <el-row >
            <el-input v-model="form.name"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_idcard"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>身份证号</div>
          </el-row>
          <el-row>
            <el-input v-model="form.idcard"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_id"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>工号/学号</div>
          </el-row>
          <el-row>
            <el-input v-model="form.id"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_college"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>学院</div>
          </el-row>
          <el-row>
            <el-input v-model="form.college"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_phone"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>手机号</div>
          </el-row>
          <el-row>
            <el-input v-model="form.phone"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_rea"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>外出事由</div>
          </el-row>
          <el-row>
            <el-input v-model="form.reason"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_loca"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>外出目的地</div>
          </el-row>
          <el-row>
            <el-input v-model="form.address"></el-input>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_cal"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>预计出校时间</div>
          </el-row>
          <el-row>
            <el-date-picker
                v-model="form.sdate"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="2">
          <el-image :src="i_cal"></el-image>
        </el-col>
        <el-col :span="22">
          <el-row>
            <div>预计返校时间</div>
          </el-row>
          <el-row>
            <el-date-picker
                v-model="form.edate"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>
    </el-form-item>
    <el-button type="primary" plain @click="open">申请</el-button>
  </el-form>
</div>
</template>

<script>
import i_college from '@/assets/i_college.png'
import i_id from '@/assets/i_id.png'
import i_idcard from '@/assets/i_idcard.png'
import i_name from '@/assets/i_name.png'
import i_phone from '@/assets/i_phone.png'
import i_cal from '@/assets/i_cal.png'
import i_loca from '@/assets/i_loca.png'
import i_rea from '@/assets/i_rea.png'
export default {
  name:"LS",
  data(){
    return{
      i_college,
      i_id,
      i_idcard,
      i_name,
      i_phone,
      i_cal,
      i_loca,
      i_rea,
      form: {
        name: '',
        idcard: '',
        id: '',
        college:'',
        phone: '',
        reason:'',
        address:'',
        sdate:'',
        edate:''
      }
    };
  },
  methods:{
    open(){
      let t = this
      t.$axios.post("http://localhost:8081/ioapply/submit",t.form).then(res=>{




        t.$alert('申请成功', '申请成功', {
          confirmButtonText: '确定'
        });
      })

    }
  },
  mounted() {
    this.form.name = this.$store.getters.get_name
    this.form.id = this.$store.getters.get_id
    this.form.idcard = this.$store.getters.get_idcard
    this.form.college = this.$store.getters.get_college
  }
}
</script>
<style scoped>
.demo-ruleForm >>> .el-input__inner{
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>