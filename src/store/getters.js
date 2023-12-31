const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  staffPhoto: state => state.user.userInfo.staffPhoto,
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId, // 建立用户id的映射
  hrsaasTime: state => state.user.hrsaasTime,
  companyId: state => state.user.userInfo.companyId

}
export default getters
