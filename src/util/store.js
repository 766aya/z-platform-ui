import { validateNull } from "./validate"

/**
 * 根据名称获取storage内容
 * @param {String} param.name 需要获取的storage的key
 * @param {Boolean} debug 是否debug模式
 */
export function getStore ({ name }, debug = false) {
  let obj = {}
  let content
  obj = window.sessionStorage.getItem(name)
  if (validateNull(obj)) obj = window.localStorage.getItem(name)
  if (validateNull(obj)) return
  try {
    obj = JSON.parse(obj)
  } catch (e) {
    return obj
  }
  if (debug) {
    return obj
  }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = eval(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}

/**
 * 根据名称设置storage
 * @param {Object} param0
 * @param {String} param[name] 需要设置的storage的key
 * @param {Any} param[content] storage保存的内容
 * @param {String} param[type] 默认操作localStorage 可选session
 */
export function setStore ({ name, content, type = "local"}) {
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }
  if (type === 'session') window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}

/**
 * 根据name移除一个storage
 * @param {String} param.name 需要移除的key
 */
export function removeStore ({ name, type = 'local' }) {
  if (type === 'session') {
    window.sessionStorage.removeItem(name)
  } else {
    window.localStorage.removeItem(name)
  }
}

/**
 * 根据类型获取所有storage属性
 * @param {String} params.type 清空storage类型 默认获取localStorage 传session则清空sessionStorage
 */
export function getAllStore ({ type = 'local' }) {
  const list = []
  if (type === 'local') {
    for (let i = 0; i <= window.sessionStorage.length; i++) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    }
  } else {
    for (let i = 0; i <= window.localStorage.length; i++) {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i)
        })
      })
    }
  }
  return list
}

/**
 * 根据类型清空storage
 * @param {String} params.type 清空storage类型 默认清空localStorage 传session则清空sessionStorage
 */
export function clearStore ({ type = 'local' }) {
  if (type === 'session') {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}