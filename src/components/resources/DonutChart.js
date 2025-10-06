import React, { Component } from "react";
import Chart from "react-apexcharts";
class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#F25522", "#2bc155", "#6c757d"],
        sparkline: {
          enabled: true,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
      },
      series: [44, 55, 41],
      labels: ["A", "B", "C"],
      dataLabels: {
        enabled: false,
      },
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="175"
        />
      </div>
    );
  }
}

export default DonutChart;
