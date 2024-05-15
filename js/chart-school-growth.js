// var chartDomGrowth = document.getElementById('schoolGrowth');
// var myChartGrowth = echarts.init(chartDomGrowth);
// var option;

// schoolGrowthOptions = {
//   xAxis: {
//     type: 'category',
//     data: [
//       '1998',
//       '2003',
//       '2010',
//       '2011',
//       '2012',
//       '2013',
//       '2014',
//       '2015',
//       '2016',
//       '2017',
//       '2018',
//       '2020',
//       '2021',
//       '2022',
//       '2023'
//     ],
//     axisPointer: {
//       value: "2016-10-7",
//       snap: true,
//       label: {
//         show: true
//       },
//       handle: {
//         show: true
//       }
//     },
//     splitLine: {
//       show: false
//     }
//   },
//   yAxis: {
//     type: 'value',
//     name: 'Student Enrollment',
//     nameTextStyle: {
//       fontSize: 16
//     },
//     interval: 7500,
//     max: 30000
//   },
//   tooltip: {
//     triggerOn: "none",
//     alwaysShowContent: true
//   },
//   series: [
//     {
//       type: 'line',
//       name: 'Student Enrollment',
//       data: ['54', '382', '1858', '3837', '5319', '7523', '10946', '12804', '14890', '16994', '19334', '20425', '20248', '21928', '22903'],
//       animationDuration: 5000
//     },
//     {
//       type: 'line',
//       name: 'School',
//       data: ['BASIS Tuscon North', 'BASIS Scottsdale', 'BASIS Oro Valley', 'BASIS Chandler', 'BASIS Phoenix', 'BASIS Ahwatukee', 'BASIS Oro Valley Primary', 'BASIS Chandler Primary South', 'BASIS Chandler Primary North', 'BASIS Peoria Primary', 'BASIS Baton Rouge Materra', 'BASIS Austin Primary', 'BASIS Austin', 'BASIS Benbrook', 'BASIS Cedar Park'],
//       animationDuration: 5000
//     },
//     {
//       type: 'line',
//       name: 'School',
//       data: ['', '', '', 'BASIS Flagstaff', 'BASIS Washington, D.C.', 'BASIS Mesa', 'BASIS Phoenix Central', 'BASIS Phoenix South', '', 'BASIS Goodyear', 'BASIS Phoenix Primary', 'BASIS San Antonio Northeast', 'BASIS Baton Rouge Primary Mid City', 'BASIS San Antonio Jack Lewis Jr.', 'BASIS Cedar Park Primary'],
//       animationDuration: 5000
//     },
//     {
//       type: 'line',
//       name: 'School',
//       data: ['', '', '', 'BASIS Peoria', '', 'BASIS San Antonio Shavano', 'BASIS Prescott', 'BASIS Goodyear Primary', '', 'BASIS San Antonio Primary Medical Center', 'BASIS Scottsdale Pimary West', 'BASIS San Antonio Primary Northeast', '', 'BASIS San Antonio Primary Jack Lewis Jr.', ''],
//       animationDuration: 5000
//     },
//     {
//       type: 'line',
//       name: 'School',
//       data: ['', '', '', '', '', 'BASIS Tuscon Primary', 'BASIS San Antonio Primary North Central', 'BASIS Scottsdale Primary East', '', '', '', '', '', 'BASIS Pflugerville', ''],
//       animationDuration: 5000
//     },
//     {
//       type: 'line',
//       name: 'School',
//       data: ['', '', '', '', '', '', '', '', '', '', '', '', '', 'BASIS Pflugerville Primary', ''],
//       animationDuration: 5000
//     }
//   ]
// };

// schoolGrowthOptions && myChartGrowth.setOption(schoolGrowthOptions);



google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Month'); // Implicit domain label col.
      data.addColumn('number', 'Student Enrollment'); // Implicit series 1 data col.
			data.addColumn({type:'string', role:'tooltip', 'p': {'html': true}}); // annotationText col.
      data.addRows([
          ['1998', 58, nintyEight()],
          ['2003', 382, zeroThree()],
          ['2010', 1858, ten()],
          ['2011', 3837, eleven()],
          ['2012', 5319, twelve()],
          ['2013', 7523, thirteen()],
          ['2014', 10946, fourteen()],
          ['2015', 12804, fifteen()],
          ['2016', 14890, sixteen()],
          ['2017', 16994, seventeen()],
          ['2018', 19334, eightteen()],
          ['2020', 20425, twenty()],
          ['2021', 20248, twentyOne()],
          ['2022', 21928, twentyTwo()],
          ['2023', 22903, twentyThree()]
      ]);

      var options = {
        hAxis: { 
          title: 'hover over each dot to view enrollment amount and schools added'
        },
        vAxis: {
          scaleType: 'linear',
          ticks: [0, 1000, 7500 ,15000 , 22500]
        },
        pointSize: 5,
        legend: { position: 'none' },
        tooltip: { isHtml: true }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
    
function nintyEight() {
  return `<div style="padding: 10px; white-space: nowrap; ">` + '<p>' + 'Total Enrollment - 58' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Tucson North' + '</p>' + `</div>`;
}
function zeroThree() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 382' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Scottsdale' + '</p>' + `</div>`;
}
function ten() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 1,858' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Oro Valley' + '</p>' + `</div>`;
}
function eleven() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 3,837' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Chandler' + '</p>' + '<p>' + 'BASIS Flagstaff' + '</p>' + '<p>' + 'BASIS Peoria' + '</p>' + `</div>`;
}
function twelve() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 5,319' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Phoenix' + '</p>' + '<p>' + 'BASIS Washington, D.C.' + '</p>' + `</div>`;
}
function thirteen() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 7,523' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Ahwatukee' + '</p>' + '<p>' + 'BASIS Mesa' + '</p>' + '<p>' + 'BASIS San Antonio Shavano' + '</p>' + '<p>' + 'BASIS Tuscon Primary' + '</p>' + `</div>`;
}
function fourteen() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 10,946' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Oro Valley Primary' + '</p>' + '<p>' + 'BASIS Phoenix Central' + '</p>' + '<p>' + 'BASIS Prescott' + '</p>' + '<p>' + 'BASIS San Antonio Primary North Central' + '</p>' + `</div>`;
}
function fifteen() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 12,804' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Chandler Primary South' + '</p>' + '<p>' + 'BASIS Goodyear' + '</p>' + '<p>' + 'BASIS Goodyear Primary' + '</p>' + '<p>' + 'BASIS Scottsdale Primary East' + '</p>' + `</div>`;
}
function sixteen() {
  return `<div style="padding: 10px; white-space: nowrap;">`+ '<p>' + 'Total Enrollment - 14,890' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Chandler Primary North' + '</p>' + `</div>`;
}
function seventeen() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 16,994' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Peoria Primary' + '</p>' + '<p>' + 'BASIS Phoenix South' + '</p>' + '<p>' + 'BASIS San Antonio Primary Medical Center' + '</p>' + `</div>`;
}
function eightteen() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 19,334' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Baton Rouge Materra' + '</p>' + '<p>' + 'BASIS Phoenix Primary' + '</p>' + '<p>' + 'BASIS Scottsdale Primary West' + '</p>' + `</div>`;
}
function twenty() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 20,425' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Austin Primary' + '</p>' + '<p>' + 'BASIS San Antonio Northeast' + '</p>' + '<p>' + 'BASIS San Antonio Primary Northeast' + '</p>' + `</div>`;
}
function twentyOne() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 20,248' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' + 'BASIS Austin' + '</p>' + '<p>' + 'BASIS Baton Rouge Primary Mid City' + '</p>' + `</div>`;
}
function twentyTwo() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 21,928' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' +  'BASIS Benbrook' + '</p>' + '<p>' +  'BASIS San Antonio Jack Lewis Jr.' + '</p>' + '<p>' +  'BASIS San Antonio Primary Jack Lewis Jr.' + '</p>' + '<p>' +  'BASIS Pflugerville' + '</p>' + '<p>' +  'BASIS Pflugerville Primary' + '</p>' + `</div>`;
}
function twentyThree() {
  return `<div style="padding: 10px; white-space: nowrap;">` + '<p>' + 'Total Enrollment - 22,903' + '</p>' + '<p style="margin: 15px 0px 5px 0px; border-bottom: 1px solid black; width: fit-content;">' + 'Schools Opened' + '</p>' + '<p>' +  'BASIS Cedar Park' + '</p>' + '<p>' +  'BASIS Cedar Park Primary' + '</p>' + `</div>`;
}

