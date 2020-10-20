import axios from '../plugins/axios'
const commonUrl = '/login'

/**
 * 用途：调用登录接口
 * @param {*} params 
 */
export function wxAuth (params) {
    return axios.get(`${commonUrl}/ajax/wxAuth`, params);  
}
