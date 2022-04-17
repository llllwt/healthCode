<template>
<div>
  <el-table
      height="600"
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="college"
        label="学院"
        width="180">
    </el-table-column>
    <el-table-column
        prop="major"
        label="专业"
        width="200">
    </el-table-column>
    <el-table-column
        prop="id"
        label="学号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名">
    </el-table-column>
    <el-table-column label="健康码颜色">
      <template slot-scope="scope">
        <div id="code" :style="{'background-color':tableData[scope.$index].color}"></div>
      </template>
    </el-table-column>
    <el-table-column
        prop="temp"
        label="备注">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index)"
            >删除健康码</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name:"OV",
  data(){
    return{
      tableData: [],
    };
  },
  methods:{
    del(index){
      let t = this
      t.$axios.post('http://localhost:8081/healthycode/del',{id : t.tableData[index].id}).then(res=>{
        t.tableData[index].color = ''
      })
    }
  },
  mounted() {
    let t = this
    t.$axios.post('http://localhost:8081/healthycode/admin',{id:t.$store.getters.get_id}).then(res=>{

      if(res.data.data){
        t.tableData = res.data.data
      }

      t.tableData.forEach(function (item) {
        if(item.temp === '0'){
          item.temp = '今日已打卡'
        }else {
          item.temp = '已连续'+item.temp+'天未打卡'
        }
      })
    })
  }
}
</script>
<style scoped>
#code{
height: 20px;
width: 80px
}
</style>