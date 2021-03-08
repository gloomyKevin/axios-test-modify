// 用于实现拦截器，
function InterceptorManager() {
    this.handlers = []
}

// InterceptorManager 构造函数原型上实现了三个方法 use、eject、forEach
InterceptorManager.prototype.use = function(fulfilled, rejected) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
    })
    // 返回当前编号
    return this.handlers.length - 1
}

InterceptorManager.prototype.eject = function(id) {
    if(this.handlers[id]) {
        this.handlers[id] = null
    }
}

// 遍历handlers，将 handlers 里每一项作为参数传给fn
InterceptorManager.prototype.forEach = function(fn) {
    return utils.forEach(this.handlers, function forEachHandler(h) {
        if(h) {
            fn(h)
        }
    })
}

module.exports = InterceptorManager