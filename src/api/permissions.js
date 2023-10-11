import request from '@/utils/request'

/**
 * 提交登录
 * @param {Object} data
 * @returns promise
 */
export function getPermissions() {
  return request({
    url: '/sys/permission'
  })
}

/**
 * 录入
 * @param {Object} data
 * @returns promise
 */
export function addPermissions(data) {
  return request({
    url: '/sys/permission',
    method: 'POST',
    data
  })
}
