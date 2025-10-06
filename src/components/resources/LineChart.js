import React from "react";
import Chart from "react-apexcharts";

export default function SplineAreaChart({
  series = [
    {
      name: "Sales",
      data: [28, 40, 36, 52, 38, 60, 55],
    },
    {
      name: "Revenue",
      data: [18, 30, 26, 42, 28, 50, 45],
    },
  ],
  categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  height = 320,
}) {
  const options = {
    chart: {
      type: "area",
      toolbar: { show: true },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth", // <- makes it a spline
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.05,
        stops: [20, 100],
      },
    },
    markers: {
      size: 4,
      hover: { sizeOffset: 2 },
    },
    xaxis: {
      categories,
      labels: { rotate: 0 },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return Math.round(val);
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    legend: {
      position: "top",
    },
    grid: {
      borderColor: "rgba(0,0,0,0.06)",
      strokeDashArray: 4,
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { height: 260 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-sm">
      <Chart options={options} series={series} type="area" height={height} />
    </div>
  );
}
