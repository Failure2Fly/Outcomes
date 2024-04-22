
  var scienceScore = document.getElementById('science_score');

  var myChartScience = echarts.init(scienceScore, null, {
    renderer: 'svg',
    useDirtyRect: false
  });
  var app = {};


  var scienceOptions;


  scienceOptions = {
    title: {
      text: 'SCIENCE Score'
    },
    tooltip: {
      
    },
    xAxis: {
      splitLine:{ show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      data: ['U.S.', 'Macao', 'Singapore', 'China', 'BASIS']
    },
    series: [{
      name: 'score',
      type: 'bar',
      data: [
      {
        value: 478,
        itemStyle: {
          color: "#93C3CE"
        }
      }, 
      {
        value: 558,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 569,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 591,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 609,
        itemStyle: {
          color: "#7AC943" 
        }
      }]
    }]
  };


  if (scienceOptions && typeof scienceOptions === 'object') {
    myChartScience.setOption(scienceOptions);
  }


  window.addEventListener('resize', myChartScience.resize);

      