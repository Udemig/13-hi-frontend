"use client";

import { Doughnut } from "react-chartjs-2";
import { GraphData } from "@/types";
import { FC } from "react";
import "chart.js/auto";

interface Props {
  data: GraphData;
  options?: any;
}

const DoughnutGraph: FC<Props> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
