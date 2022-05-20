import isPlainObject from '@/utils/isPlainObject'
import isEmpty from '@/utils/isEmpty'
import FileSaver from 'file-saver'
import axios from './base'
import { getToken } from '@/utils/auth'

const pullPostData = (data) => {
  if (Array.isArray(data) || typeof data === 'string') {
    return data
  }

  return removeEmptyKey(data)
}

const removeEmptyKey = (obj) => {
  const result = {}
  if (isEmpty(obj)) {
    return result
  }

  if (Array.isArray(obj)) {
    return obj
  }

  Object.keys(obj).forEach((key) => {
    const val = obj[key]
    if (isPlainObject(val)) {
      result[key] = removeEmptyKey(val)
    } else if (!isEmpty(val)) {
      result[key] = val
    }
  })

  return result
}

export class CustomError extends Error {
  constructor ({
    message,
    response,
    error,
    serverError
  }) {
    super(message)
    this.message = message
    this.error = error
    this.response = response
    this.serverError = serverError
    this.name = 'CustomError'
  }
}

// const errorMsg = {
//   500: '系统异常',
//   403: '无权访问',
//   401: '请重新登录'
// }

// const resWrap = (response) => {
//   const {
//     code, status, msg, info
//   } = response
//   if (code !== 0 || status <= 0) {
//     MessageBox({
//       title: 'error',
//       message: msg || info,
//       showCancelButton: false
//     })
//     throw new Error(msg || info)
//   }
//   return response
// }

// const errorWrap = (error) => {
//   const { response } = error
//   if (!response) {
//     Promise.reject(error.message)
//   }

//   const { status } = response
//   const msg = errorMsg[status] || '系统出现异常'
//   MessageBox({
//     title: 'error',
//     message: msg,
//     showCancelButton: false
//   })
//   const e = new CustomError({
//     message: '登录信息失效',
//     response
//   })
//   Promise.reject(e)
// }

export default class Request {
  constructor () {
    this.token = null
  }

  static base (method, url, data = {}, config) {
    return axios[method](url, data, config).then(res => res)
  }

  static async post (url, data, config = {}, needLogin = true) {
    let options = { ...config }
    if (needLogin) {
      const token = getToken()
      if (token) {
        options = Object.assign({}, { headers: { 'x-token': token } }, options)
      }
    }
    const newData = removeEmptyKey(data)
    return this.base('post', url, newData, options)
  }

  static async get (url, data = {}, config = {}, needLogin = true) {
    let options = { ...config }
    const params = { ...data }
    if (needLogin) {
      const token = getToken()
      if (token) {
        options = Object.assign({}, { headers: { 'x-token': token } }, options)
      }
    }
    options.params = removeEmptyKey(params)
    return this.base('get', url, options)
  }

  static postAsFormData (rawUrl, data, config) {
    const tmpConfig = Object.assign({}, { headers: {} }, config)
    const token = getToken()
    tmpConfig.headers['Content-Type'] = undefined
    tmpConfig.headers['x-token'] = token

    let formData
    if (data instanceof FormData) {
      formData = data
    } else {
      formData = new FormData()
      Object.keys(data).forEach((key) => {
        const item = data[key]
        if (Array.isArray(item)) {
          if (item[0] instanceof File) {
            item.forEach((p) => {
              formData.append(`${key}[]`, p)
            })
          } else if (item.length) {
            formData.append(key, item)
          }
        } else if (typeof item !== 'undefined' && item !== null) {
          formData.append(key, item)
        }
      })
    }

    return this.base('post', rawUrl, formData, tmpConfig)
  }

  // static async postWithCache(url, config) {
  //   if (httpCache[url]) {
  //     return Promise.resolve(httpCache[url]);
  //   }
  //   return this.base('post', url, {}, config)
  //     .then((res) => {
  //       httpCache[url] = res;
  //       return httpCache[url];
  //     });
  // }

  // static async getWithCache(url, data, config) {
  //   if (httpCache[url]) {
  //     return Promise.resolve(httpCache[url]);
  //   }
  //   const newData = removeEmptyKey(data);
  //   return this.get(url, newData, config)
  //     .then((res) => {
  //       httpCache[url] = res;
  //       return httpCache[url];
  //     });
  // }
  static postForDownloadFile (url, data, config = {
    autoNotice: true
  }, fileName) {
    const token = getToken()
    const newConfig = Object.assign({}, config, { responseType: 'blob' }, { headers: { 'x-token': token } })
    const tempData = pullPostData(data)

    return axios.post(url, tempData, newConfig).then((response) => {
      const blob = response.data
      const contentDisposition = response.headers['content-disposition'] || ''
      const disposition = contentDisposition.split(';').reduce((result, str) => {
        if (str.includes('=')) {
          const [key, value] = str.split('=')
          result[key] = value
        }
        return result
      }, {})
      const downloadFileName = fileName || disposition.fileName || disposition['fileName*'] ||
        'download'
      FileSaver.saveAs(blob, downloadFileName)
    })
  }

  static postForFileStream (url, data, config = {
    autoNotice: false
  }, needLogin = true) {
    let options = { ...config }
    if (needLogin) {
      const token = getToken()
      if (token) {
        options = Object.assign({}, { headers: { 'x-token': token } }, options)
      }
    }
    const newData = removeEmptyKey(data)
    return this.base('post', url, newData, options)
  }

}


import moment from 'moment'
// import { daylight } from './momentTimezone'

/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime (time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength (str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray (actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param (json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text (val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge (target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass (element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime (type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

// eslint-disable-next-line
export const deepCopy = (obj) => {
  if (obj === null || typeof (obj) !== 'object') {
    return obj
  }

  if ('isActiveClone' in obj) {
    throw new Error('循环引用警告⚠️')
  }

  let temp
  if (obj instanceof Date) {
    temp = new obj.constructor(obj)
  } else {
    temp = obj.constructor()
  }

  Object.keys(obj).forEach((key) => {
    obj.isActiveClone = null
    temp[key] = deepCopy(obj[key])
    delete obj.isActiveClone
  })
  return temp
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...params) {
    args = params
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, params)
      context = params = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr (arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString () {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass (ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

/**
 * Remove class from element
 * @param {number} time
 * @param {Object} opt
 */
export function timeStamp (time, format = 'dd hh mm ss') {
  const obj = {
    d: parseInt(time / 60 / 60 / 24),
    h: parseInt(time / 60 / 60 % 24),
    m: parseInt(time / 60 % 60),
    s: parseInt(time % 60)
  }
  return format.replace(/([dhms])+/g, (result, key) => {
    if (!obj[key]) return ''
    if (result.length > 1) {
      return `${obj[key]}${result[0]}`
    }
    return obj[key]
  })
}

// 二维数组的排列组合
export function doCombination (arr) {
  var count = arr.length - 1 // 数组长度(从0开始)
  var tmp = []
  var totalArr = []// 总数组

  return doCombinationCallback(arr, 0)// 从第一个开始
  // js 没有静态数据，为了避免和外部数据混淆，需要使用闭包的形式
  function doCombinationCallback (arr, currIndex) {
    for (const val of arr[currIndex]) {
      tmp[currIndex] = val// 以currIndex为索引，加入数组
      // 当前循环下标小于数组总长度，则需要继续调用方法
      if (currIndex < count) {
        doCombinationCallback(arr, currIndex + 1)// 继续调用
      } else {
        totalArr.push(tmp)// (直接给push进去，push进去的不是值，而是值的地址)
      }

      // js  对象都是 地址引用(引用关系)，每次都需要重新初始化，否则 totalArr的数据都会是最后一次的 tmp 数据；
      const oldTmp = tmp
      tmp = []
      for (const index of oldTmp) {
        tmp.push(index)
      }
    }
    return totalArr
  }
}

// 强制指为英国时间
export function formatDate (date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return undefined

  const momentObj = moment(date)

  // if (momentObj.isDST()) {
  //   return momentObj.utcOffset(1 + daylight).format(format)
  // }
  // return momentObj.utcOffset(0 + daylight).format(format)
  return momentObj.format(format)
}

// 格式化为英国时间戳
export function formatDateTimestamp (date) {
  if (!date) return undefined

  const momentObj = moment(date)

  // if (momentObj.isDST()) {
  //   return momentObj.utcOffset(1 + daylight).valueOf()
  // }
  // return momentObj.utcOffset(0 + daylight).valueOf()
  return momentObj.valueOf()
}

// // 强制指为英国时间
// export function formatDate (date, format = 'YYYY-MM-DD HH:mm:ss') {
//   if (!date) return undefined

//   return moment(date).format(format)
// }

// export function formatDate (date, format = 'yyyy-MM-dd hh:mm:ss') {
//   if (!date) return undefined
//   const _origin = new Date(date)
//   var o = {
//     'M+': _origin.getMonth() + 1,
//     'd+': _origin.getDate(),
//     'h+': _origin.getHours(),
//     'm+': _origin.getMinutes(),
//     's+': _origin.getSeconds(),
//     'q+': Math.floor((_origin.getMonth() + 3) / 3),
//     S: _origin.getMilliseconds()
//   }
//   if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (_origin.getFullYear() + '').substr(4 - RegExp.$1.length)) }
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(format)) {
//       format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
//     }
//   }
//   return format
// }

export function file2Base64 (file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('can\'t find file'))
    }
    const reader = new FileReader()
    reader.onloadend = function (e) {
      resolve(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}

export function dataURLtoFile (dataurl, filename) {
  // 获取到base64编码
  const arr = dataurl.split(',')
  // 将base64编码转为字符串
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n) // 创建初始化为0的，包含length个元素的无符号整型数组
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {
    type: 'image/jpeg'
  })
}

export const copyText = (val) => {
  const input = document.createElement('textarea')
  input.value = val
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, input.value.length)
  document.execCommand('Copy')
  document.body.removeChild(input)
}

export function download (path) {
  const element = document.createElement('a')
  element.setAttribute('href', path)
  element.setAttribute('download', path)
  document.body.appendChild(element)
  element.click()
  setTimeout(() => {
    element.remove()
  }, 100)
}

export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = typeof a
  const isObjectB = typeof b
  if(isObjectA && isObjectB) {
      try {
          const isArrayA = Array.isArray(a)
          const isArrayB = Array.isArray(b)
          if(isArrayA && isArrayB) {
              return a.length === b.length && a.every((e, i) => {
                  return looseEqual(e, b[i])
              })
          }else if(!isArrayA && !isArrayB) {
              const keysA = Object.keys(a)
              const keysB = Object.keys(b)
              return keysA.length === keysB.length && keysA.every(function (key) {
                  return looseEqual(a[key], b[key])
              })
          }else {
              return false
          }
      } catch(e) {
          return false
      }
  }else if(!isObjectA && !isObjectB) {
      return String(a) === String(b)
  }else {
      return false
  }
}

export default val => !(val || val === false || val === 0)

export default obj => obj && typeof obj === 'object' && obj.constructor === Object

