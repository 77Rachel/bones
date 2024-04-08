import axios from "axios";
const api = axios.create(
	{ 
		baseURL: "http://192.168.2.19:9090", //这里配置的是后端服务提供的接口
		timeout: 1000 
	}
);
export default api;
