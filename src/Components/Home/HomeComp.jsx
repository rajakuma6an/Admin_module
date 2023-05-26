import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";

import Chart from "react-apexcharts";

const HomeComp = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, [dispatch]);
  const sectionData = [
    {
      name: "Lorem ipsam",
      value: "563 k",
    },
    {
      name: "Lorem ipsam",
      value: "563 k",
    },
    {
      name: "Lorem ipsam",
      value: "563 k",
    },
    {
      name: "Lorem ipsam",
      value: "563 k",
    },
    {
      name: "Lorem ipsam",
      value: "563 k",
    },
  ];
  const barSeries = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Desktops",
      data: [21, 11, 45, 11, 69, 22, 59, 21, 48],
    },
    {
      name: "Desktops",
      data: [41, 61, 65, 21, 89, 12, 19, 91, 18],
    },
  ];
  const barOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      // text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      enabled: false,
    },
  };

  const columnSeries = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45],
    },
  ];
  const columnOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May"],
    },

    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      enabled: false,
      // y: {
      //   formatter: function (val) {
      //     return "$ " + val + " thousands";
      //   },
      // },
    },
  };

  const pieSeries = [44, 55, 13, 43, 22];
  const donutSeries = [44, 55, 41, 17, 15];

  const pieOptions = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const donutOptions = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="home px-5 py-5">
      <h4>DashBoard</h4>
      <div className="d-flex align-items-center justify-content-between my-5">
        <div className="w-50">
          <Chart
            options={columnOptions}
            series={columnSeries}
            type="bar"
            height={350}
          />
        </div>
        <div className="w-50">
          <Chart
            options={barOptions}
            series={barSeries}
            type="line"
            height={350}
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-3 my-4">
        <div className="w-50">
          <Chart
            options={pieOptions}
            series={pieSeries}
            type="pie"
            height={350}
          />
        </div>
        <div className="w-50">
          <Chart
            options={donutOptions}
            series={donutSeries}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
