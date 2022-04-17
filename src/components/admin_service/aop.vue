<template>
  <div>
    <el-row>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="2">
        <div class="option">
          <el-image :src="OV" class="images" fit="contain"></el-image>
          <div class="op" @click="toOV">
            &nbsp健康码信息<br>
            <div style="font-size: 20px">&nbsp&nbspOverview</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="PS" class="images" fit="contain"></el-image>
          <div class="op" @click="toPS">
            &nbsp出入校审批<br>
            <div style="font-size: 20px">&nbsp&nbspApprove</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="padding: 2px;height: 290px" offset="1">
        <div class="option">
          <el-image :src="IF" class="images" fit="contain"></el-image>
          <div class="op" @click="toIF">
            &nbsp导入信息<br>
            <div style="font-size: 20px">&nbsp&nbspImport information
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OV from '@/assets/OV.png'
import PS from '@/assets/PS.png'
import IF from '@/assets/IF.png'
export default {
  name:"aop",
  data(){
    return{
      OV,
      PS,
      IF

    };
  },
  methods:{
    toIF(){
      this.$router.push({name: 'IF'})
    },
    toOV(){
      this.$router.push({name: 'OV'})
    },
    toPS(){
      this.$router.push({name: 'PS'})
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