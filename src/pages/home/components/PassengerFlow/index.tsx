import * as echarts from "echarts";
import { useEffect } from "react";
import styles from "./index.module.scss";

function PassengerFlow() {

    const initChart = () => {
        const elem: any = document.getElementById("passengerFlowBar");
        const myChart = echarts.init(elem);
        const option = {
            legend: {
                data: ['得到成仙', '阴司待审', '六道轮回'],
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['平均值', 'Q1', 'Q2', 'Q3', 'Q4']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '得到成仙',
                    type: 'bar',
                    data: [4000, 4000, 2500, 3000, 2500]
                },
                {
                    name: '阴司待审',
                    type: 'bar',
                    data: [4000, 5000, 5000, 5500, 5500]
                },
                {
                    name: '六道轮回',
                    type: 'bar',
                    data: [4000, 6000, 6000, 7000, 9000]
                },
            ]
        };

        option && myChart.setOption(option);
    };

    useEffect(() => {
        initChart();
    }, []);

    return (
        <div className={styles['passenger-flow']}>
            <div className={"table-title"}>地府客流统计</div>
            <div id="passengerFlowBar" className={styles['passenger-flow-bar']}></div>
        </div>
    );
}

export default PassengerFlow;