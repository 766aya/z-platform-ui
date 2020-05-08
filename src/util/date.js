/**
 * 日期时间格式化
 * @param {Date} date 
 * @param {String} format 
 */
export function dateFormat(date, format = "yyyy-MM-dd hh:mm:ss") {
  let DATE = new Date(date)
  if (this instanceof Date) {
    DATE = this
    format = date
  }
  if (DATE !== 'Invalid Date') {
    const o = {
      'y+': DATE.getFullYear(),
      'M+': DATE.getMonth() + 1,
      'd+': DATE.getDate(),
      'H+': DATE.getHours(),
      'm+': DATE.getMinutes(),
      's+': DATE.getSeconds(),
      'S+': DATE.getMilliseconds(),
      'q+': Math.floor(DATE.getMonth() / 3) + 1,
      'h+': (() => {
        const hour = DATE.getHours() % 12
        return hour === 0 ? 12 : hour
      })(),
      'E+': (() => {
        const week = {
          '0': 'Sunday',
          '1': 'Monday',
          '2': 'Tuesday',
          '3': 'Wednesday',
          '4': 'Thursday',
          '5': 'Friday',
          '6': 'Saturday'
        }
        return week[DATE.getDay() + '']
      })(),
      'D': (() => {
        const week = {
          '0': '周日',
          '1': '周一',
          '2': '周二',
          '3': '周三',
          '4': '周四',
          '5': '周五',
          '6': '周六'
        }
        return week[DATE.getDay() + '']
      })(),
      'T': (() => {
        const hour = ['凌晨', '早上', '下午', '晚上']
        const h = DATE.getHours()
        if (h === 12) return '中午'
        return hour[parseInt(h / 6)]
      })()
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')', 'g').test(format)) {
        const len = RegExp.$1.length
        format = format.replace(RegExp.$1, len === 1 ? o[k] : ('00' + o[k]).substr(-len))
      }
    }
    return format
  }
  return ''
}


/**
 * 时间差计算
 * @param {Date} date1 起始时间
 * @param {Date} date2 结束时间
 */
export function calcDate(date1, date2) {
  let date3 = date2 - date1

  let days = Math.floor(date3 / (24 * 3600 * 1000))

  let leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000))

  let leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))

  let leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  let seconds = Math.round(date3 / 1000)
  return {
    leave1,
    leave2,
    leave3,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

/**
 * 根据出生日期计算年龄
 * @param {Date} birthday 出生日期
 * @param {Number} type 1-周岁 2-虚岁
 */
export function getAge(birthday, type = 1) {
  let $age = 0
  let now = new Date()
  let $nowYear = now.getFullYear()
  let $nowMonth = now.getMonth() + 1
  let $nowDay = now.getDate()
  birthday = new Date(birthday)
  if (birthday === 'Invalid Date') {
    return $age
  }

  let $birthYear = birthday.getFullYear();
  let $birthMonth = birthday.getMonth() + 1;
  let $birthDay = birthday.getDay();


  if (type === 1) {
    $age = $nowYear - ($birthYear - 1);
  } else if (type === 2) {
    if ($nowMonth < $birthMonth) {
      $age = $nowYear - $birthYear - 1;
    } else if ($nowMonth === $birthMonth) {
      if ($nowDay < $birthDay) {
        $age = $nowYear - $birthYear - 1;
      } else {
        $age = $nowYear - $birthYear;
      }
    } else {
      $age = $nowYear - $birthYear;
    }
  }
  return $age;
}
