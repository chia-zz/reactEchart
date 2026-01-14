// 商品排行
import ReactECharts from "echarts-for-react";

export default function ProductRankingBar({ title, list }) {
  const names = list.map((item) => item.name);
  const counts = list.map((item) => item.count);

  const option = {
    title: { text: title },
    tooltip: { trigger: "axis" },
    xAxis: { type: "value" },
    yAxis: { type: "category", data: names },
    series: [
      {
        type: "bar",
        data: counts,
        label: {
          show: true,
          position: "right",
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
