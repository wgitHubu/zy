<template>
  <el-dialog
    title="提示"
    :visible="dialogVisible"
    width="50%"
    @close="onClose"
    @open="onOpen"
  >
    <el-tree
      ref="tree"
      :data="data"
      :props="defaultProps"
      show-checkbox
      default-expand-all
      node-key="id"
      :default-checked-keys="defaultKeys"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="saveRolePermission">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getPermissions } from '@/api/permissions'
import { tranListToTreeData } from '@/utils'
import { getRolesInfo, setRolesPermissiom } from '@/api/roles'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    roleId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      data: [],
      defaultProps: {
        // children: 'children',
        label: 'name'
      },
      defaultKeys: []
    //   '604f7df5f900be1850edb152'
    }
  },
  methods: {
    onClose() {
      this.$emit('update:dialogVisible', false)
    },
    async onOpen() {
      const res = await getPermissions()
      this.data = tranListToTreeData(res, '0')
      this.getRolePermissions()
    },
    async getRolePermissions() {
    //   console.log(this.roleId)
      const res = await getRolesInfo(this.roleId)
      this.defaultKeys = res.permIds
    },
    async saveRolePermission() {
      const id = this.roleId
      const permIds = this.$refs.tree.getCheckedKeys()
      await setRolesPermissiom({ id, permIds })
      this.$message.success('分配成功')
      this.onClose()
    }
  }
}
</script>

<style>

</style>
