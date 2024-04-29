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
  tooltip: {
    trigger: 'axis'
  },
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
      {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
      {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
      {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
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