import ReactECharts from "echarts-for-react";

export default function RevenuePie({ data }) {
  const option = {
    title: { text: "營收來源", left: "center" },
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: "60%",
        data: [
          { value: data.cash, name: "現金" },
          { value: data.card, name: "信用卡" },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 360 }} />;
}
