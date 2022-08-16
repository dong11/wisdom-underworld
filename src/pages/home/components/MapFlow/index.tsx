import { useEffect } from 'react';
import * as echarts from 'echarts';
import { chinaGeoJson } from '../../../../utils/region';

import styles from './index.module.scss';

function MapFlow() {

    const allData = {
        "citys": [
            { "name": "北京", "value": [116.405285,39.904989], "symbolSize": 12, "itemStyle": { "color": "#33FFCC" } },
            { "name": "上海", "value": [121.472644,31.231706], "symbolSize": 12, "itemStyle": { "color": "#33FFCC" } },
            { "name": "深圳", "value": [114.057939,22.543527], "symbolSize": 12, "itemStyle": { "color": "#33FFCC" } },
            { "name": "杭州", "value": [120.210792,30.246026], "symbolSize": 8, "itemStyle": { "color": "#F58158" } },
            { "name": "新疆", "value": [87.650692,43.928967], "symbolSize": 12, "itemStyle": { "color": "#33FFCC" } },
            { "name": "黑龙江", "value": [126.661998,45.742253], "symbolSize": 8, "itemStyle": { "color": "#F58158" } },
        ],
        "moveLines": [
            { "fromName": "北京", "toName": "上海", "coords": [ [116.405285,39.904989], [121.472644,31.231706] ] },
            { "fromName": "北京", "toName": "新疆", "coords": [ [116.405285,39.904989], [87.650692,43.928967] ] },
            { "fromName": "北京", "toName": "黑龙江", "coords": [ [116.405285,39.904989], [126.661998,45.742253] ] },
            { "fromName": "上海", "toName": "新疆", "coords": [ [121.472644,31.231706], [87.650692,43.928967] ] },
            { "fromName": "深圳", "toName": "新疆", "coords": [ [114.057939,22.543527], [87.650692,43.928967] ] },
        ]
    };

    const initEchart = () => {
        echarts.registerMap("china", chinaGeoJson);
        const element: any = document.getElementById('chinaMap');
        let myChart = echarts.init(element);
        myChart.clear()
        let option;
        option = {
            series: [{
                name: '标记点',
                type: 'effectScatter', // 特效散点图
                coordinateSystem: 'geo', // 'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
                zlevel: 2, // 所有图形的 zlevel 值。
                silent: true,
                rippleEffect: { //涟漪特效相关配置。
                    brushType: 'stroke', //波纹的绘制方式，可选 'stroke' 和 'fill'。
                    period: 4, // 动画的时间。
                    scale: 2.5, // 动画中波纹的最大缩放比例。
                },
                showEffectOn: 'render', // 配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
                data: allData.citys
            }, {
                name: '流向线路',
                type: 'lines',
                coordinateSystem: 'geo', // 'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
                zlevel: 2,
                large: true, // 是否开启大规模散点图的优化，在数据图形特别多的时候（>=5k）可以开启。开启后配合 largeThreshold 在数据量大于指定阈值的时候对绘制进行优化。缺点：优化后不能自定义设置单个数据项的样式。
                effect: {
                    show: true,
                    constantSpeed: 30, // 点移动的速度
                    symbol: 'pin', // 图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                    symbolSize: 3, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                    trailLength: 0, // 线的宽度
                },
                lineStyle: { // 线的颜色、宽度，样式设置
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#58B3CC'
                    }, {
                        offset: 1,
                        color: '#F58158'
                    }], false),
                    width: 3, // 线的宽度
                    opacity: 0.8, // 线的透明度
                    curveness: 0.1 // 线的完全程度
                },
                data: allData.moveLines
            }],
            geo: {
                map: 'china',
                silent: true,
                itemStyle: {
                    areaColor: 'rgba(10,47,114, 0.5)',
                    borderColor: '#5800FF',
                    borderWidth: 1,
                },
            },
        };
        option && myChart.setOption(option);
    };

    useEffect(() => {
        initEchart();
    }, []);

    return <div id='chinaMap' className={styles['map-flow']}></div>;    
}

export default MapFlow;