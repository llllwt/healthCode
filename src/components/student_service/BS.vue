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
      <div>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_add"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>当前居住位置</div>
              </el-row>
              <el-row>
                <el-input v-model="form.location"></el-input>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_temp"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>前一日体温</div>
              </el-row>
              <el-row>
                <el-input v-model="form.out"></el-input>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_car"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>本人近期（14 天内）是否去过中高风险地区</div>
              </el-row>
              <el-row>
                <el-radio v-model="form.midhigh" label="1">是</el-radio>
                <el-radio v-model="form.midhigh" label="2">否</el-radio>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_plane"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>本人近期（14 天内）是否去过国外？</div>
              </el-row>
              <el-row>
                <el-radio v-model="form.abroad" label="1">是</el-radio>
                <el-radio v-model="form.abroad" label="2">否</el-radio>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_ill"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>本人近期（14 天内）是否接触过新冠确诊病人或疑似病人？</div>
              </el-row>
              <el-row>
                <el-radio v-model="form.touch" label="1">是</el-radio>
                <el-radio v-model="form.touch" label="2">否</el-radio>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_ns"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>本人是否被卫生部门确认为新冠肺炎确诊病例或疑似病例？</div>
              </el-row>
              <el-row>
                <el-radio v-model="form.confirm" label="1">是</el-radio>
                <el-radio v-model="form.confirm" label="2">否</el-radio>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_ill"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>当前是否存在发烧（≥37.3℃）、乏力、干咳、鼻塞、流涕、咽痛、腹泻等症状。</div>
              </el-row>
              <el-row>
                <el-radio v-model="form.situation" label="1">是</el-radio>
                <el-radio v-model="form.situation" label="2">否</el-radio>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="2">
              <el-image :src="i_tran"></el-image>
            </el-col>
            <el-col :span="22">
              <el-row>
                <div>返校方式&nbsp车次/车牌</div>
              </el-row>
              <el-row>
                <el-input v-model="form.tran"></el-input>
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
                    v-model="form.date"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
              </el-row>
            </el-col>
          </el-row>
        </el-form-item>
      </div>
      <el-button type="primary" plain @click="open">申请</el-button>
    </el-form>
  </div>
</template>

<script>
import i_car from '@/assets/i_car.png'
import i_college from '@/assets/i_college.png'
import i_id from '@/assets/i_id.png'
import i_idcard from '@/assets/i_idcard.png'
import i_ill from '@/assets/i_ill.png'
import i_name from '@/assets/i_name.png'
import i_ns from '@/assets/i_ns.png'
import i_phone from '@/assets/i_phone.png'
import i_plane from '@/assets/i_plane.png'
import i_add from '@/assets/i_add.png'
import i_temp from '@/assets/i_temp.png'
import i_tran from '@/assets/i_tran.png'
import i_cal from '@/assets/i_cal.png'
export default {
  name:"BS",
  data(){
    return{
      i_car,
      i_college,
      i_id,
      i_idcard,
      i_ill,
      i_name,
      i_ns,
      i_phone,
      i_plane,
      i_add,
      i_temp,
      i_cal,
      i_tran,
      form: {
        name: '',
        idcard: '',
        id: '',
        college:'',
        phone: '',
        midhigh: '2',
        abroad: '2',
        touch: '2',
        confirm: '2',
        situation: '2',
        location:'',
        out:36.0,
        date:'',
        tran:''
      }
    };
  },
  methods:{
    open(){
      let t = this
      t.$axios.post("http://localhost:8081/backapply/submit",t.form).then(res=>{



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