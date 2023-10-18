import * as echarts from 'echarts';
export const lineOption = (xAxis, data, title = 'Earn Analysis') => {
  const options = {
    textStyle: {
      color: '#000',
    },
    title: {
      left: '10px',
      text: title,
      textStyle: {
        color: '#5F57FF',
        fontSize: 25,
        fontFamily: 'HelloFont WenYiHei',
      },
    },
    tooltip: {
      trigger: 'axis',
      // formatter: "{b}:{c}",
    },
    xAxis: [
      {
        data: xAxis,
        show: false,
      },
    ],
    yAxis: [
      {
        show: false,
      },
    ],
    grid: [
      {
        left: '10px',
        right: '10px',
        bottom: '15px',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data,
        smooth: true,
        lineStyle: {
          width: 1,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(95,89,224,1)',
            },
            {
              offset: 1.01,
              color: 'rgba(95,89,224,0.00)',
            },
          ]),
        },
      },
    ],
  };
  return options;
};
export const barOption = (xAxis, data, title = 'Earn Analysis') => {
  const options = {
    textStyle: {
      color: '#000',
    },
    title: {
      left: '10px',
      text: title,
      textStyle: {
        color: '#5F57FF',
        fontSize: 25,
        fontFamily: 'HelloFont WenYiHei',
      },
    },
    tooltip: {
      trigger: 'axis',
      // formatter: "{b}:{c}",
    },
    xAxis: [
      {
        data: xAxis,
        show: false,
      },
    ],
    yAxis: [
      {
        show: false,
      },
    ],
    grid: [
      {
        left: '10px',
        right: '10px',
        bottom: '15px',
      },
    ],
    series: [
      {
        type: 'bar',
        barMaxWidth: 20,
        data,
      },
    ],
  };
  return options;
};
