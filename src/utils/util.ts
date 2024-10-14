import moment from 'moment';
import { get_reCAPTCHA_Score_API } from '@/api/index';
// import * as ethers from 'ethers';
// import * as w3name from 'w3name';
const ethers = require("ethers");
const w3name = require("w3name");


function getScheduledRewards(_ethAddress) {
    return new Promise((resolve, reject) => {
        // const ethAddress = _ethAddress ? _ethAddress : '0x6D29549Ce7B7b65218737C7B2a5804e1B5226588';
        const ethAddress = _ethAddress;
        // console.log("getScheduledRewardsgetScheduledRewards", ethAddress)
        const provider = ethers.providers ? new ethers.providers.JsonRpcProvider('https://api.node.glif.io/rpc/v1') : new ethers.JsonRpcProvider('https://api.node.glif.io/rpc/v1');
        let abi = "";

        const getRewards = async () => {
            // const response = await fetch('./abi.json');
            const response = await fetch('/public/abi.json');
            // console.log(response, '---responseresponse');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            abi = await response.json();
        };

        getRewards().then(async () => {
            const contracts = await getContractsWithRetry(provider, abi);
            const contractRewards = await Promise.all(
                contracts.map(async (contract) => {
                    return getScheduledRewardsWithFallback(contract, ethAddress);
                })
            );
            // console.log('------', contractRewards, { rewards: contractRewards[0].toString() })
            resolve({ rewards: contractRewards[0].toString() })
            return;
        }).catch((err) => {
            console.error("Failed to get scheduled rewards:", err.stack);
            return { rewards: 0 }
        });



        async function getContractAddresses() {
            const CONTRACT_ADDRESSES_IPNS_KEY = "k51qzi5uqu5dmaqrefqazad0ca8b24fb79zlacfjw2awdt5gjf2cr6jto5jyqe";
            const name = w3name.parse(CONTRACT_ADDRESSES_IPNS_KEY);
            const revision = await w3name.resolve(name);
            return revision.value.split("\n").filter(Boolean);
        }

        async function getContractsWithRetry(provider, abi) {
            const contractAddresses = await getContractAddresses();
            return contractAddresses.map((address) => {
                return new ethers.Contract(address, abi, provider);
            });
        }

        async function getScheduledRewardsWithFallback(contract, ethAddress) {
            try {
                // return await contract.rewardsScheduledFor(ethAddress);
                const d = await contract.rewardsScheduledFor(ethAddress);
                // console.log('dddddd-----', d.toString(), '---', d._hex);
                return d.toString();
            } catch (err: any) {
                console.error("Failed to get scheduled rewards:", err.stack);
                return 0n;
            }
        }
    })

}

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
    time = new Date(time);
    return moment.utc(time).local().format(type);
};
const transferUTCTimeDay = (time, type = 'YYYY-MM-DD') => {
    time = time.getTime() + 24 * 60 * 60 * 1000;
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
const Lower_score_limit = 0.1;
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
const getType = (fileName: string) => {
    fileName = fileName.toLowerCase();
    if (
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".png") ||
        fileName.endsWith(".svg") ||
        fileName.endsWith('.bmp') ||
        fileName.endsWith('.gif') ||
        fileName.endsWith('.ico') ||
        fileName.endsWith('.webp') ||
        fileName.endsWith('.heif') ||
        fileName.endsWith('.psd')
    ) {
        return 1;
    } else if (fileName.endsWith('.mp4') || fileName.endsWith('.avi') || fileName.endsWith('.mov')) {
        return 2;
    } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
        return 4;
    } else if (fileName.endsWith('.zip') || fileName.endsWith('.rar') || fileName.endsWith('.gz') || fileName.endsWith('.tar')) {
        return 5;
    } else if (fileName.endsWith('.cmd')) {
        return 5;
    } else if (fileName.endsWith('.css')) {
        return 5;
    } else if (fileName.endsWith('.mp3')) {
        return 3;
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls') || fileName.endsWith('.csv')) {
        return 4;
    } else if (fileName.endsWith('.pdf')) {
        return 4;
    } else if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) {
        return 4;
    } else if (fileName.endsWith('.text') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
        return 4;
    } else if (fileName.endsWith('.html')) {
        return 5;
    } else if (fileName.endsWith('/')) {
        return 5;
    } else {
        return 5;
    }
};

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
    getType,
    getScheduledRewards
};
