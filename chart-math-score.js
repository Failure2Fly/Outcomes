var mathScore = document.getElementById('math_score');

  var myChartMath = echarts.init(mathScore, null, {
    renderer: 'svg',
    useDirtyRect: false
  });


  var app = {};

  var mathOptions;

  mathOptions = {
    title: {
      text: 'MATH Score'
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



  if (mathOptions && typeof mathOptions === 'object') {
    myChartMath.setOption(mathOptions);
  }

  window.addEventListener('resize', myChartMath.resize);


      