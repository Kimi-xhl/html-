    //基于准备好的dom, 实例化echarts对象
    var myChart = echarts.init(document.getElementById('main'))

    // 饼图
    // 指定图表的配置项和数据  

    var option = {
        title: {
            text: 'PieChart',
            subtext: 'Sub Title',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '流量来源',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name:' wdas'},
                    { value: 735, name: 'ssd'},
                    { value: 580, name: 'sda Ads'},
                    { value: 484, name: 'Dirsdaect'},
                    { value: 300, name: 'wee Ads'}
                ]
            },
        ],
        emphasis: { //强调
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 20,
                shadowColor: 'rgba(0,0,0,0.8)'
            }
        }
    }
  

    //使用刚指定的配置项和数据显示图表
    myChart.setOption(option)
