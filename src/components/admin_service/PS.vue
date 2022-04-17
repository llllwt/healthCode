<template>
<div>
  <el-tabs type="border-card">
    <el-tab-pane label="出入校审批">
      <el-table
          height="544"
          :data="tableData1"
          style="width: 100%">
        <el-table-column
            prop="college"
            label="学院"
            width="300">
        </el-table-column>
        <el-table-column
            prop="major"
            label="专业"
            width="300">
        </el-table-column>
        <el-table-column
            prop="id"
            label="学号"
            width="250">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="250">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="primary"
                plain
                @click="lookio(scope.$index, scope.row)"
            >查看</el-button>
            <el-button
                size="mini"
                type="success"
                plain
                @click="succio(scope.$index, scope.row)"
            >通过</el-button>
            <el-button
                size="mini"
                type="danger"
                plain
                @click="failio(scope.$index, scope.row)"
            >打回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="返校审批">
      <el-table
          height="544"
          :data="tableData0"
          style="width: 100%">
        <el-table-column
            prop="college"
            label="学院"
            width="300">
        </el-table-column>
        <el-table-column
            prop="major"
            label="专业"
            width="300">
        </el-table-column>
        <el-table-column
            prop="id"
            label="学号"
            width="250">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="250">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="primary"
                plain
                @click="lookback(scope.$index, scope.row)"
            >查看</el-button>
            <el-button
                size="mini"
                type="success"
                plain
                @click="succback(scope.$index, scope.row)"
            >通过</el-button>
            <el-button
                size="mini"
                type="danger"
                plain
                @click="failback(scope.$index, scope.row)"
            >打回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
  <el-dialog
      title="详细信息"
      :visible.sync="dialogVisible"
      width="30%">
    <div v-for="item in current_info" style="margin-bottom: 10px;font-size: 15px">
      {{item}}
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name:"PS",
  data(){
    return{
      tableData0: [],
      tableData1: [],
      dialogVisible:false,
      current_info:[],
      pass:'',
    };
  },
  methods:{
     lookio(index,row){
       let t = this
       let id = {id:t.tableData1[index].rowid}
       t.$axios.post('http://localhost:8081/manager/lookio',id).then(res=>{
         t.current_info = res.data.data
         t.dialogVisible = true
       })
     },
    succio(index,row){
       this.pass = '1'
      this.passio(index)
    },
    failio(index,row){
       this.pass = '0'
      this.passio(index)
    },
     passio(index){
       let t =this
       let re = {id:t.tableData1[index].rowid,pass:t.pass}
       this.$axios.post("http://localhost:8081/manager/dealio",re).then(res=>{
         t.tableData1.splice(index,1)
       })
     },
    lookback(index,row){
      let t = this
      let id = {id:t.tableData0[index].rowid}
      t.$axios.post('http://localhost:8081/manager/lookback',id).then(res=>{
        t.current_info = res.data.data
        t.dialogVisible = true
      })
    },
    succback(index,row){
      this.pass = '1'
      this.passback(index)
    },
    failback(index,row){
      this.pass = '0'
      this.passback(index)
    },
    passback(index){
      let t =this
      let re = {id:t.tableData0[index].rowid,pass:t.pass}
      this.$axios.post("http://localhost:8081/manager/dealback",re).then(res=>{
        t.tableData0.splice(index,1)
      })
    },
  },
  mounted() {
    let t =this;
    let id = {id:t.$store.getters.get_id}
    this.$axios.post("http://localhost:8081/manager/check",id).then(res=>{

      if(res.data.data.back){
        t.tableData0 = res.data.data.back
      }

      if(res.data.data.io){
        t.tableData1 = res.data.data.io
      }

    })
  }
}
</script>
<style scoped>

</style>