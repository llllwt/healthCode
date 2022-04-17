<template>
<div>
  <div style="font-family: 幼圆;color: Blue;font-size: 30px;text-align: center">导入信息</div>
  <div style="text-align: center;margin-top: 30px">
    <el-upload
        class="upload-demo"
        drag
        accept=".xlsx"
        action=""
        :http-request="httpRequest"
        :file-list="fileList"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传xlsx文件</div>
    </el-upload>
  </div>
</div>
</template>

<script>
export default {
  name:"IF",
  data(){
    return{
      fileList: [],
    };
  },
  methods:{
    httpRequest(param) {
      let t =this

      let fileObj = param.file; // 相当于input里取得的files
      let fd = new FormData(); // FormData 对象
      fd.append("file", fileObj); // 文件对象

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      this.$axios.post('http://localhost:8081/student/addstudent', fd, config).then((res) => {
        if(res.data.code === 200){
          t.$notify({
            title: '成功',
            message: '上传成功',
            type: 'success'
          });
        }else {
          t.$notify.error({
            title: '失败',
            message: '上传失败'
          });
        }
      });
    },
  }
}
</script>
<style scoped>

</style>