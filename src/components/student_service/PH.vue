<template>
<div>
  <div v-show="show">
    <el-table
        height="600"
        :default-sort = "{prop: 'date', order: 'descending'}"
        :data="tableData"
        style="width: 800px;margin-left: 289.6px">
      <el-table-column
          sortable
          prop="time"
          label="日期"
          width="600">
      </el-table-column>
      <el-table-column label="具体信息">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="lookup(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div v-show="!show">
    <div style="margin-left: 500px">
      <el-card class="box-card">
        <div v-for="item in current_info"  class="text item">
          {{item}}
        </div>
        <div style="text-align: right">
          <el-button plain type="primary" @click="back">返回</el-button>
        </div>

      </el-card>
    </div>
  </div>
</div>
</template>

<script>
import i_time from '@/assets/i_time.png'
import i_add from '@/assets/i_add.png'
import i_temp from '@/assets/i_temp.png'
import i_car from '@/assets/i_car.png'
import i_plane from '@/assets/i_plane.png'
import i_ill from '@/assets/i_ill.png'
import i_ns from '@/assets/i_ns.png'
export default {
  name:"PH",
  data(){
    return{
      i_time,
      i_add,
      i_car,
      i_ill,
      i_ns,
      i_plane,
      i_temp,
      show:true,
      tableData: [],
      info:[],
      current_info:[]
    };
  },
  methods:{
    lookup(index,row){
      this.current_info = this.info[index]
      this.show = !this.show
    },
    back(){
      this.show = !this.show
    }
  },
  mounted() {
    let t = this
    let id = {"id":t.$store.getters.get_id}
    t.$axios.post('http://localhost:8081/healthyinfo/history',id).then(res=>{
      for(let i = 0;i<res.data.data.time.length;i++){
        let ti = {time:res.data.data.time[i]}
        t.tableData.push(ti)
      }
      t.info = res.data.data.list
      console.log(t.info)
    })
  }
}
</script>
<style scoped>
.demo-ruleForm >>> .el-input__inner{
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.text {
  font-size: 15px;
}

.item {
  padding: 10px 0;
}
.box-card {
  width: 480px;
  text-align: left;
}
</style>