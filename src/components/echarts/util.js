export const lineOption = (xAxis, data, title = 'Balance') => {
  const options = {
    textStyle: {
      color: '#000',
    },
    visualMap: [
      {
        show: false,
        type: 'continuous',
        min: 0,
        max: 400,
        // inRange: {
        //   color: ["#121122", "rgba(3,4,5,0.4)", "red"],
        //   symbolSize: [30, 100],
        // },
      },
    ],
    title: {
      left: 'center',
      text: title,
      textStyle: {
        color: '#000',
      },
    },
    tooltip: {
      trigger: 'axis',
      // formatter: "{b}:{c}",
    },
    xAxis: [
      {
        data: xAxis,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Unit: DMC',
      },
    ],
    grid: [
      {
        left: '50px',
        bottom: '15%',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data,
      },
    ],
  };
  return options;
};
