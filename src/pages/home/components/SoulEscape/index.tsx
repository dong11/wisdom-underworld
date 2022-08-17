import * as echarts from "echarts";
import { useEffect } from "react";
import styles from "./index.module.scss";

function SoulEscape() {
    const initChart = () => {
        const elem: any = document.getElementById("soulEscapeRadar");
        const myChart = echarts.init(elem);
        const option = {
            radar: {
                raduis: '58%',
                nameGap: 8,
                indicator: [
                    {
                        name: "暴殒轻生",
                        max: 1700,
                    },
                    {
                        name: "沉疴难返",
                        max: 1700,
                    },
                    {
                        name: "死于非命",
                        max: 5000,
                    },
                    {
                        name: "寿终正寝",
                        max: 1000,
                    },
                    {
                        name: "惨遭屠戮",
                        max: 5000,
                    },
                ],
                splitLine: {
                    lineStyle: {
                        color: "rgba(88, 0, 255, 0.4)",
                    },
                },
            },
            series: [
                {
                    type: "radar",
                    data: [
                        {
                            value: [880, 1689, 1689, 520, 780],
                        },
                    ],
                    areaStyle: {
                        color: "#d2b42c",
                        opacity: 0.6,
                    },
                    lineStyle: {
                        color: "#d2b42c",
                        opacity: 1,
                    },
                    itemStyle: {
                        color: "#d2b42c",
                    },
                },
            ],
        };

        option && myChart.setOption(option);
    };

    useEffect(() => {
        initChart();
    }, []);

    return (
        <div className={styles["soul-escape"]}>
            <div className={"table-title"}>阴司勾魂系统</div>
            <div id="soulEscapeRadar" className={styles["soul-escape-radar"]}></div>
            <div className={styles["soul-escape-list"]}>
                <div className={styles["soul-escape-item"]}>
                    <span>今日勾魂量</span>
                    <span>44370笔</span>
                </div>
                <div className={styles["soul-escape-item"]}>
                    <span>本周勾魂量</span>
                    <span>44370笔</span>
                </div>
                <div className={styles["soul-escape-item"]}>
                    <span>本月勾魂量</span>
                    <span>44370笔</span>
                </div>
            </div>
        </div>
    );
}

export default SoulEscape;
