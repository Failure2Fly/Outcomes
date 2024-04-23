var chartDomGrowth = document.getElementById('schoolGrowth');
var myChartGrowth = echarts.init(chartDomGrowth);
var option;

schoolGrowthOptions = {
  xAxis: {
    type: 'category',
    data: [
      '1998',
      '2003',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2020',
      '2021',
      '2022',
      '2023'
    ]
  },
  yAxis: {
    type: 'value',
    interval: 7500,
    max: 30000
  },
  series: [
    {
      data: [
        58, 382, 1858, 3838, 5319, 7523, 10946, 12804, 14890, 16994, 19334,
        20425, 20248, 21928, 22903
      ],
      type: 'line',
      name: 'series'
    }
  ]
};

schoolGrowthOptions && myChartGrowth.setOption(schoolGrowthOptions);