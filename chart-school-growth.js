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
    ],
    axisPointer: {
      value: "2016-10-7",
      snap: true,
      label: {
        show: true
      },
      handle: {
        show: true
      }
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'Student Enrollment',
    nameTextStyle: {
      fontSize: 16
    },
    interval: 7500,
    max: 30000
  },
  tooltip: {
    triggerOn: "none",
    alwaysShowContent: true
  },
  series: [
    {
      type: 'line',
      name: 'Student Enrollment',
      data: ['54', '382', '1858', '3837', '5319', '7523', '10946', '12804', '14890', '16994', '19334', '20425', '20248', '21928', '22903'],
      animationDuration: 5000
    },
    {
      type: 'line',
      name: 'School',
      data: ['BASIS Tuscon North', 'BASIS Scottsdale', 'BASIS Oro Valley', 'BASIS Chandler', 'BASIS Phoenix', 'BASIS Ahwatukee', 'BASIS Oro Valley Primary', 'BASIS Chandler Primary South', 'BASIS Chandler Primary North', 'BASIS Peoria Primary', 'BASIS Baton Rouge Materra', 'BASIS Austin Primary', 'BASIS Austin', 'BASIS Benbrook', 'BASIS Cedar Park'],
      animationDuration: 5000
    },
    {
      type: 'line',
      name: 'School',
      data: ['', '', '', 'BASIS Flagstaff', 'BASIS Washington, D.C.', 'BASIS Mesa', 'BASIS Phoenix Central', 'BASIS Phoenix South', '', 'BASIS Goodyear', 'BASIS Phoenix Primary', 'BASIS San Antonio Northeast', 'BASIS Baton Rouge Primary Mid City', 'BASIS San Antonio Jack Lewis Jr.', 'BASIS Cedar Park Primary'],
      animationDuration: 5000
    },
    {
      type: 'line',
      name: 'School',
      data: ['', '', '', 'BASIS Peoria', '', 'BASIS San Antonio Shavano', 'BASIS Prescott', 'BASIS Goodyear Primary', '', 'BASIS San Antonio Primary Medical Center', 'BASIS Scottsdale Pimary West', 'BASIS San Antonio Primary Northeast', '', 'BASIS San Antonio Primary Jack Lewis Jr.', ''],
      animationDuration: 5000
    },
    {
      type: 'line',
      name: 'School',
      data: ['', '', '', '', '', 'BASIS Tuscon Primary', 'BASIS San Antonio Primary North Central', 'BASIS Scottsdale Primary East', '', '', '', '', '', 'BASIS Pflugerville', ''],
      animationDuration: 5000
    },
    {
      type: 'line',
      name: 'School',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '', 'BASIS Pflugerville Primary', ''],
      animationDuration: 5000
    }
  ]
};

schoolGrowthOptions && myChartGrowth.setOption(schoolGrowthOptions);