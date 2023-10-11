<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="false">
        <template #after>
          <el-button type="primary" @click="showAddPermission(1,'0')">添加权限</el-button>
        </template>
      </page-tools>
      <!-- 表格 -->
      <el-table
        ref="table"
        :data="tableData"
        style="width: 100%"
        row-key="id"
      >
        <el-table-column
          prop="name"
          label="名称"
        >
          <template slot-scope="{row}">
            <div @click="expandColumn(row)">
              <template v-if="row.type===1">
                <i class="el-icon-folder-opened" />
                {{ row.name }}
              </template>
              <template v-if="row.type===2">
                <i style="margin-left:20px;" class="el-icon-folder" />
                {{ row.name }}
              </template>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="code"
          label="标识"
        />
        <el-table-column
          prop="description"
          label="描述"
        />
        <el-table-column
          prop="address"
          label="操作"
        >
          <template slot-scope="{row}">
            <el-button v-if="row.type===1" type="text" @click="showAddPermission(2,row.id)">添加</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="addperDialogVisible"
      width="50%"
      @close="onClose"
    >
      <!-- 表单 -->
      <el-form ref="form" :model="addPermissionForm" label-width="80px" :rules="addPermissionRules">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="addPermissionForm.name" />
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="addPermissionForm.code" />
        </el-form-item>
        <el-form-item label="权限秒速">
          <el-input v-model="addPermissionForm.description" />
        </el-form-item>
        <el-form-item label="开启">
          <el-switch
            v-model="addPermissionForm.enVisible"
            active-color="blue"
            inactive-color="#ccc"
            active-value="1"
            inactive-value="0"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addperDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="seveAddPermission">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getPermissions, addPermissions } from '@/api/permissions'
import { tranListToTreeData } from '@/utils'
export default {
  name: 'HrsaasIndex',

  data() {
    return {
      tableData: [],
      addperDialogVisible: false,
      addPermissionForm: {
        name: '',
        code: '',
        description: '',
        enVisible: '0',
        type: '',
        pid: ''
      },
      addPermissionRules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      }
    }
  },

  mounted() {
    this.loadPermissions()
  },

  methods: {
    async loadPermissions() {
      const res = await getPermissions()
      this.tableData = tranListToTreeData(res, '0')
    },
    expandColumn(row) {
      row.isExpand = !row.isExpand
      this.$refs.table.toggleRowExpansion(row, row.isExpand)
    },
    showAddPermission(type, pid) {
      this.addPermissionForm.type = type
      this.addPermissionForm.pid = pid
      this.addperDialogVisible = true
    },
    seveAddPermission() {
      this.$refs.form.validate(async(valid) => {
        if (!valid) return
        await addPermissions(this.addPermissionForm)
        this.$message.success('添加成功')
        this.addperDialogVisible = false
        this.loadPermissions()
      })
    },
    onClose() {
      console.log(111)
      this.addPermissionForm = {
        name: '',
        code: '',
        description: '',
        enVisible: '0',
        type: '',
        pid: ''
      }
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table__expand-icon{
  display: none !important;
}
</style>
