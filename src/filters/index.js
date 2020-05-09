import { dateFormat as df } from "../util/date"

/**
 * 货币显示格式化
 * @param {[Number, String]} val 值
 * @param {String} prefix 前缀
 * @param {String} suffix 后缀
 * @param {Number}} precision 精度
 */
function priceFilter(val, prefix = '', suffix = '', precision = 2) {
  if (val) {
    return `${prefix}${Number(val).toFixed(precision)}${suffix}`
  } else {
    return ''
  }
}

/**
 * 时间日期格式化
 * @param {Date} val 值
 * @param {String} format 格式化字符串
 */
function dateFormat(val, format) {
  return df(val, format)
}

function repeatStr(str, count) {
  let text = ''
  for (let i = 0; i < count; i++) {
    text += str
  }
  return text
}

/**
 * 字符串密文显示
 * @param {String} val 值
 * @param {Array} regArr 格式化数组 起始下标 中间长度 结束长度
 * @param {Number} type 0-前后格式化 1-中间格式化 
 * @param {String} replaceText 替换文本
 */
function replaceStr(val, regArr, type, replaceText = '*') {
  let str = val.toString()
  let regtext = ''
  let Reg = null
  //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
  if (regArr.length === 3 && type === 0) {
    regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[1]);
    return str.replace(Reg, '$1' + replaceCount + '$2')
  } else if (regArr.length === 3 && type === 1) {
    regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
    Reg = new RegExp(regtext);
    var replaceCount1 = repeatStr(replaceText, regArr[0]);
    var replaceCount2 = repeatStr(replaceText, regArr[2]);
    return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
  } else if (regArr.length === 1 && type === 0) {
    regtext = '(^\\w{' + regArr[0] + '})'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount)
  } else if (regArr.length === 1 && type === 1) {
    regtext = '(\\w{' + regArr[0] + '}$)'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount)
  }
}

export default {
  priceFilter,
  dateFormat,
  replaceStr,
}