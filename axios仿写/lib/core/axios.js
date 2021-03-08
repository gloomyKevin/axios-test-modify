function Axios(instanceConfig) {
    this.default = instanceConfig
    // interceptor对象有两个属性：request 和 response
    this.interceptor = {
        request: new interceptorManager(),
        response: new interceptorManager()
    }
}

Axios.prototype.request = function() {

}