"use client";
import { Line } from "react-chartjs-2";
import { FC } from "react";
import "chart.js/auto";
import { GraphData } from "@/types";

interface Props {
  data: GraphData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return (
    <Line
      data={data}
      options={{ plugins: { legend: { display: false } }, responsive: true }}
    />
  );
};

export default LineGraph;
