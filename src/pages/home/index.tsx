import React, { useEffect } from "react";
import * as echarts from 'echarts';
import { chinaGeoJson } from '../../utils/region';

function HomePage() {

    const initEchart = () => {
        echarts.registerMap("china", chinaGeoJson);
        const element: any = document.getElementById('echartId');
        let myChart = echarts.init(element);
        myChart.clear()
        let option;
        option = {
            series: [],
            geo: {
                map: 'china',
                silent: true,
                itemStyle: {
                    areaColor: 'rgba(10,47,114, 0.5)',
                    borderColor: 'rgba(10,47,114, 1)',
                    borderWidth: 1,
                },
            },
        };
        option && myChart.setOption(option);
    };


    useEffect(() => {
        initEchart();
    }, []);

    return <div className="home-page">
        <div id='echartId' style={{width: '500px', height: '500px'}}></div>
    </div>
}

export default HomePage;