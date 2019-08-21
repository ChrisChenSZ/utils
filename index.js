/**
 * 判断类型
 * @param obj {*}
 * @retruns {string}
 */
function  getType (obj) {
    let type = typeof (obj)
    if(type !== 'object') {
      return type
    }
    return Object.prototype.toString.call(obj).slice(8, -1)
  }

  export default {
      getType
  }