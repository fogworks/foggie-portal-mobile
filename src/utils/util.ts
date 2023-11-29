import moment from 'moment';
import { get_reCAPTCHA_Score_API } from '@/api/index';
function transferTime(utc_datetime) {
  let new_datetime = utc_datetime.split('T')[0] + ' ' + utc_datetime.split('T')[1].split('.')[0];

  let timestamp = new Date(new_datetime.replace(/-/g, '/')).getTime();
  timestamp = timestamp / 1000;
  // timestamp = timestamp + 8 * 60 * 60;

  let date = new Date(parseInt(timestamp) * 1000);
  let YY = date.getFullYear() + '-';
  let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return YY + MM + DD + ' ' + hh + mm + ss;
}
function transferGMTTime(time) {
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
}
const transferUTCTime = (time, type = 'YYYY-MM-DD HH:mm:ss') => {
  return moment.utc(time).local().format(type);
};
const transferUTCTimeDay = (time, type = 'YYYY-MM-DD') => {
  time = time.getTime() + 24 * 60 * 60 * 1000;
  transferUTCTimeDay;
  return moment.utc(time).local().format(type);
};
function handleTimeStamp(timestamp) {
  let date = new Date(parseInt(timestamp) * 1000);
  let YY = date.getFullYear() + '-';
  let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return YY + MM + DD + ' ' + hh + mm + ss;
}
function handleTime(time) {
  if (time < 0) {
    return;
  }
  var obj = {
    text: '-',
    day: 0,
    isDanger: false,
    s: 0,
    h: 0,
    m: 0,
  };
  if (time < 60) {
    let s = parseInt(time);
    obj.s = s;
    obj.text = `${s}Seconds `;
  } else if (time < 3600) {
    let m = parseInt(time / 60);
    let s = parseInt(time % 60);
    obj.s = s;
    obj.m = m;
    obj.text = `${m}Minutes ${s}Seconds `;
  } else if (time < 86400) {
    let h = parseInt(time / 3600);
    let min = time - h * 3600;
    let m = parseInt(min / 60);
    let ss = min - m * 60;
    let s = parseInt(ss);
    obj.s = s;
    obj.h = h;
    obj.m = m;
    obj.text = `${h}Hours ${m}Minutes ${s}Seconds `;
  } else if (time > 86400) {
    let day = parseInt(time / 86400);
    let hour = time - day * 86400;
    let h = parseInt(hour / 3600);
    let min = hour - h * 3600;
    let m = parseInt(min / 60);
    let ss = min - m * 60;
    let s = parseInt(ss);
    if (day > 7 || (day == 7 && h > 0)) {
      obj.isDanger = false;
    }
    obj.s = s;
    obj.h = h;
    obj.m = m;
    obj.day = day;
    obj.text = `${day}Days ${h}Hours ${m}Minutes ${s}Seconds `;
  }
  return obj;
}
function echartsHandleTimeStamp(timestamp) {
  let date = new Date(parseInt(timestamp));
  let YY = date.getFullYear() + '-';
  let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return MM + DD + ' ' + hh + mm;
  // return hh + mm;
}
function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

function getfilesize(size, type) {
  if (!size && size !== 0) return '';
  var num = 1024.0; //byte
  size = Number(size).toFixed(2);
  if (type === 'kb') {
    if (size < num) return size + ' kB';
    if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + ' MB'; //kb
    if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + ' GB'; //M
    return (size / Math.pow(num, 3)).toFixed(2) + ' TB'; //G
  } else {
    if (size < num) return size + ' B';
    if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + ' KB'; //kb
    if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + ' MB'; //M
    if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + ' GB'; //G
    return (size / Math.pow(num, 4)).toFixed(2) + ' TB'; //T
  }
}
function getfilesize2(size) {
  if (!size && size !== 0) return '';
  var num = 1024.0; //byte
  size = Number(size).toFixed(2);
  if (size < num) return size + ' GB'; //G
  return (size / Math.pow(num, 1)).toFixed(2) + ' TB'; //T
}

function numberToThousands(num) {
  if (num === undefined) {
    return '--';
  }
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
function getSecondTime(second_time) {
  var time = parseInt(second_time) + ' seconds';
  if (parseInt(second_time) > 60) {
    var second = parseInt(second_time) % 60;
    var min = parseInt(second_time / 60);
    time = min + ' minutes ' + second + ' seconds';
    if (min > 60) {
      min = parseInt(second_time / 60) % 60;
      var hour = parseInt(parseInt(second_time / 60) / 60);
      time = hour + ' hours ' + min + ' minutes';
      if (hour > 24) {
        hour = parseInt(parseInt(second_time / 60) / 60) % 24;
        var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
        time = day + ' days ' + hour + ' hours ' + min + ' minutes';
      }
    }
  }
  return time;
}
function handleDays(item) {
  let created = new Date(item.order_created_at).getTime();
  let now = new Date().getTime();
  let dateDiff = now - created;
  var dayDiff = Math.ceil(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
  return dayDiff;
}
function handleExprie(item) {
  let created = new Date(item.order_created_at).getTime();
  let week = item.week;
  week = week * 7 * 24 * 3600 * 1000;
  let exprie = created + week;
  exprie = transferGMTTime(exprie);
  return exprie;
}
function handleRate(item) {
  let old = Number(item.total_price);
  let now = item.income;
  let rate = '';
  if (now > old) {
    let diff = Number(now) - Number(old);
    rate = Number(Number(diff) / Number(old)).toFixed(0) * 100;
  }
  return rate;
}

/**
 * @param {string} type - homePage / login / social  / e-commerce / Buy
 *
 *  */

const privatekey = '6Lfb1P8oAAAAAOLRpus_iOzdPyWVJZmxqmggXwiC';
const secret = '6Lfb1P8oAAAAACjGYFUlFaWKOR6NqmYTKLkzRztj';
const Lower_score_limit = 0.3;
function load_gpa_token(type = 'LOGIN') {
  return new Promise(async (resolve, inject) => {
    const grecaptcha = window.grecaptcha || {};
    if (grecaptcha.enterprise) {
      grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute(privatekey, { action: type });
        console.log(token);
        let isPass = await reCAPTCHA_verification(token);
        resolve(isPass);
      });
    } else {
      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(privatekey, { action: type });
        let isPass = await reCAPTCHA_verification(token, type);
        resolve(isPass);
      });
    }
  });
}

async function reCAPTCHA_verification(token) {
  let params = {
    secret: secret,
    response: token,
  };
  let res = await get_reCAPTCHA_Score_API(params);
  console.log(res);
  if (res.success) {
    if (res.score >= Lower_score_limit) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function formatNumber(number) {
  // 先判断输入是否是有效数字
  if (isNaN(number)) {
    return { integerPart: 0, decimalPart: 0 };
  }

  // 将数字切分为整数和小数部分
  const parts = number.toString().split('.');

  // 整数部分
  let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 小数部分，保留4位小数
  let decimalPart = parts[1] ? parseFloat(`0.${parts[1]}`).toFixed(4).substring(2) : '0000';

  // 返回整数和小数部分的组合
  return { integerPart, decimalPart };
}

export {
  getSecondTime,
  transferTime,
  transferUTCTime,
  handleTimeStamp,
  echartsHandleTimeStamp,
  getQueryString,
  getfilesize,
  getfilesize2,
  numberToThousands,
  transferUTCTimeDay,
  transferGMTTime,
  load_gpa_token,
  formatNumber,
  handleDays,
  handleExprie,
  handleRate,
};
