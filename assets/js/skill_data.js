
(function initChart() {
  let type = 'column';
  // window.onresize = function(e) {
  //   if(window.innerWidth < 1024) {
  //     type = 'pie';
  //     initChart();
  //   } else {
  //     type = 'column';
  //     initChart();
  //   }
  // }
  // skills chart
  // Set up the chart
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'skill-charts',
      type : type,
      backgroundColor: 'transparent'
    },
    title: {
      text: 'My Skills',
      style: {
        color: 'ghostwhite',
        font: 'normal 28px "Trebuchet MS", Verdana, sans-serif'
      }
    },
    subtitle: {
      text: 'Click One To Show Skills',
      style: {
        color: 'ghostwhite',
        font: 'normal 18px "Trebuchet MS", Verdana, sans-serif'
      }
    },
    credits: { enabled : false },
    legend: {
      itemStyle: {
          font: '15px "Trebuchet MS", Verdana, sans-serif',
          color: 'ghostwhite'
      },
      itemHoverStyle: {
          color: '#999'
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px">{series.data[0].name}</span><br>',
      pointFormat: '<span style="color:black; font-size : 18px">{point.name} </span>: <span style="font-size : 17px; font-weight : bold">{point.y:.1f}%</span> <br/>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent of Skills'
        }
    },
    legend: {
        enabled: false
    },
    // data
    series: [{
      name: 'Skills',
        data: [
          {
            color : '#fda3b2',
            name: 'Coding',
            y : 93,
            drilldown: 'coding'
          }, {
            color : '#a58fe9',            
            name: 'Designing',
            y : 74,
            drilldown: 'designing'
          }
      ]
    }],
    drilldown: {
      series : [
        'Skill Set',
      {
        id : 'coding',
        data: [{
            name: 'CSS3',
            y: 89,
            color : 'lightskyblue'
          },
          {
            name: 'JavaScript',
            y: 97,
            color : '#ffd102'
          },
          {
            name: 'HTML5',
            y: 95
          },
          {
            name: 'Canvas',
            y: 63,
            color : '#ff4d91'
          },
          {
            name: 'WebGL',
            y: 45,
            color : '#ff8bf5'
          },
          {
            name: 'NodeJS',
            y: 35,
            color : 'greenYellow'
          },
          {
            name: 'Git',
            y: 68,
            color : '#181818'
          },
          {
            name: 'Back-End',
            y: 55,
            color : '#353535'
          }
        ]
      },
      {
        id : 'designing',
        data: [{
          name: 'Photoshop',
          y: 73,
          color : 'lightskyblue'
        },
        {
          name: 'Gimp',
          y: 43,
          color : '#ffd102'
        },
        {
          name: 'InkScape',
          color : '#181818',
          y: 88
        },
        {
          name: 'Blender',
          y: 69,
          color : '#ff8147'
        },
        {
          name: 'Web Design',
          y: 81,
          color : '#ff8bf5'
        },
        {
          name: 'Logo Design',
          y: 65,
          color : '$ff4d91'
        },{
          name: 'Poster Design',
          y: 67,
          color : 'greenYellow'
        },]
      }]
  }
  });

})()