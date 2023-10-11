import request from '@/utils/request'
/** *
 * 给用户分配角色
 * ***/
export function getRoles() {
  return request({
    url: '/sys/role'
  })
}

/** *
 * 角色列表详情
 * ***/
export function getRolesInfo(id) {
  return request({
    url: '/sys/role/' + id
  })
}

/** *
 * 角色列表详情
 * ***/
export function setRolesPermissiom(data) {
  return request({
    url: '/sys/role/assignPrem',
    method: 'put',
    data
  })
}
