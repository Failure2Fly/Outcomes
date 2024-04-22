
  var readingScore = document.getElementById('reading_score');


  var myChartReading = echarts.init(readingScore, null, {
    renderer: 'svg',
    useDirtyRect: false
  });


  var app = {};


  var readingOptions;


  readingOptions = {
    title: {
      text: 'READING Score'
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
        value: 502,
        itemStyle: {
          color: "#93C3CE"
        }
      }, 
      {
        value: 544,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 551,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 590,
        itemStyle: {
          color: "#93C3CE" 
        }
      },
      {
        value: 620,
        itemStyle: {
          color: "#7AC943" 
        }
      }]
    }]
  };



  if (readingOptions && typeof readingOptions === 'object') {
    myChartReading.setOption(readingOptions);
  }


  window.addEventListener('resize', myChartReading.resize);


      