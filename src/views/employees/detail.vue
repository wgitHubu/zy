<template>
    <div class="dashboard-container">
        <div class="app-container">
            <el-card>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
     <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
     <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
 </el-tabs>
</el-card>
 </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style>

</style>

