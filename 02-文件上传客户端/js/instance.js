/**
 * 把axios的发送请求的公共信息进行抽取
 * */

axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.headers = ['Content-Type'] = 'multipart/form-data'









// let instance = axios.create();
// instance.defaults.baseURL = 'http://127.0.0.1:8888';
// instance.defaults.headers['Content-Type'] = 'multipart/form-data';
// instance.defaults.transformRequest = (data, headers) => {
//     const contentType = headers['Content-Type'];
//     if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
//     return data;
// };
// instance.interceptors.response.use(response => {
//     return response.data;
// });