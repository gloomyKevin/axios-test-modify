

function createInstance(defaultConfig) {
    var context = new Axios(instanceConfig)
    var instance = bind(Axios.prototype.request,context)
    utils.extend(instance, Axios.prototype, context)
    utils.extend(instance, context)
    return instance
}

// axios的属性和方法来源
// 1.Axios.prototype.request
// instance
var axios = createInstance(defaults)

axios.Axios = axios

// 在默认的基础上(大部分场景，默认的就够用)，还能添加自定义配置
axios.create = function create(instanceConfig) {
    return createInstance(utils.mergeConfig(defaults, instanceConfig))
}

