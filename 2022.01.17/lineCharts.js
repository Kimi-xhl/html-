  //基于准备好的dom, 实例化echarts对象
  var myChart = echarts.init(document.getElementById('main'))

  // 折线图
  // 指定图表的配置项和数据  
  var option = {
      title: {
          text: '图表'
      },
      tooltip:{},
      legend: { //图例
          data: ['销量','价格']
      },
      xAxis: { //x轴
          data: ['衬衫','羊毛衫','牛仔裤','裤子','高跟鞋','袜子']
      },
      yAxis: {}, //y轴
      series: [  //数据源
          {
              name: '销量',
              type: 'line',
              data: [5,20,36,10,10,20]
          },
          {
              name: '价格',
              type: 'line',
              data: [10,20,30,20,20,10]
          }
      ]
  }

  //使用刚指定的配置项和数据显示图表
  myChart.setOption(option)