export default {
  computed: {
    ishasPermission() {
      return function(PermissionId) {
        return !this.$store.state.user.userInfo.roles.points.includes(PermissionId)
      }
    }
  }
}
