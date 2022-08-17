import { Statistic, Table } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import styles from "./index.module.scss";

function ExchangeRate() {
    const dataSource = [
        {
            key: "1",
            currency: "冥钞",
            amount: "1000万",
            actualAmount: "897万",
            rate: -11,
        },
        {
            key: "2",
            currency: "元宝",
            amount: "1000万",
            actualAmount: "1020万",
            rate: 20,
        },
        {
            key: "3",
            currency: "剪钱",
            amount: "897万",
            actualAmount: "1020万",
            rate: -11,
        },
        {
            key: "4",
            currency: "五畜",
            amount: "1000万",
            actualAmount: "1020万",
            rate: 20,
        },
        {
            key: "5",
            currency: "香火",
            amount: "1000万",
            actualAmount: "1020万",
            rate: 20,
        },
    ];

    const columns: any = [
        {
            title: "货币种类",
            dataIndex: "currency",
            key: "currency",
            className: "table-column-cell",
            align: "center",
        },
        {
            title: "烧入金额",
            dataIndex: "amount",
            key: "amount",
            className: "table-column-cell",
            align: "center",
            render: (text: any) => <span className="table-column-amount">{text}</span>,
        },
        {
            title: "冥界金额",
            dataIndex: "actualAmount",
            key: "actualAmount",
            className: "table-column-cell",
            align: "center",
            render: (text: any) => <span className="table-column-amount actual">{text}</span>,
        },
        {
            title: "汇率计算",
            dataIndex: "rate",
            key: "rate",
            className: "table-column-cell",
            align: "center",
            render: (text: any) => <Statistic suffix="%" value={Math.abs(+text)} prefix={+text > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />} valueStyle={{ color: +text > 0 ? '#3f8600' : '#cf1322' }} />
        },
    ];

    return (
        <div className={styles["exchange-rate"]}>
            <div className={styles["table-title"]}>天地银行今日汇率</div>
            <Table dataSource={dataSource} columns={columns} size="small" pagination={false} />;
        </div>
    );
}

export default ExchangeRate;
