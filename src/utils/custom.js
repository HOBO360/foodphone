/***
 * @creater:wjiban
 * @create_time:20-8-20 16:21:17
 * @last_modify:wjiban
 * @modify_time:20-8-20 18:0:55
 * @line_count:18
 **/

import Axios from 'axios'
// get请求
export function get(url, params) {
    return Axios.get(url, { params });
}
// port请求
export function post(url, data) {
    return Axios.post(url, data);
}

// headers:{}请求头
// 1.import-axios 
// Vue.prototype.$http=Axios
// 2.import封装方法 
// 3.导出 方法  
//4.使用 apps(){
//     get("https://**** /.com", {}).then(res => { console.log(res) });
// }