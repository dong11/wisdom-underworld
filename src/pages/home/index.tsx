import ExchangeRate from './components/ExchangeRate';
import MapFlow from './components/MapFlow';
import PassengerFlow from './components/PassengerFlow';
import SoulEscape from './components/SoulEscape';

import styles from "./index.module.scss";

function HomePage() {

    return <div className={styles["page"]}>
        {/* 标题栏 */}
        <div className={styles['title-wrap']}>
            <span></span>
        </div>
        {/* 头部 */}
        <div className={styles["top-wrap"]}>
            {/* 头部左侧 */}
            <div className={styles["top-left-box"]}>
                {/* 今日汇率 */}
                <div className={styles["rate-box"]}>
                    { <ExchangeRate></ExchangeRate> }
                </div>
                {/* 勾魂系统 */}
                <div className={styles["soul-escape-box"]}>
                    { <SoulEscape></SoulEscape> }
                </div>
            </div>
            {/* 头部中间 */}
            <div className={styles["top-center-box"]}>
                {/* 地图部分 */}
                <div className={styles["china-map-box"]}>
                    { <MapFlow></MapFlow> }
                </div>
            </div>
            {/* 头部右侧 */}
            <div className={styles["top-right-box"]}>
                {/* 客流统计 */}
                <div className={styles["passenger-flow-box"]}>
                    { <PassengerFlow></PassengerFlow> }
                </div>
            </div>
        </div>
        {/* 底部 */}
        <div className={styles["bottom-wrap"]}></div>
    </div>
}

export default HomePage;