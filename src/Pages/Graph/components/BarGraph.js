import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
function BarGraph(props) {
  const data = {
    labels: ["January", "Februry"],
    datasets: [
      {
        label: "Canada Elections 2020",
        data: [props.firstNumber, props.secondNumber],
        borderColor: ["rgba(255, 0, 0, 1)", "rgba(255, 165, 1)"],
        backgroundColor: ["rgba(255, 0, 0, 0.4)", "rgba(255, 165, 0, 0.2)"],
        pointBackgroundColor: "rgba(255, 0, 0, 0.4)",
        pointBorderColor: "rgba(255, 0, 0, 0.4)",
      },
    ],
  };
  const BarGraphWrapper = styled.div`
    width:30vw;
    height:74vh;
    font-size:40pt;
    @media(max-width:1800px){
        height:68vh;
        font-size:30pt;
    }
    @media(max-width:1528px){
        width:25vw;
    }
    @media(max-width:1500px){
        height:60vh;
        font-size:25pt;
    }
    @media(max-width:1500px){
        font-size:20pt;
    }
    @media(max-width:1170px){
        font-size:20pt;
    }
    @media(max-width:700px){
      height:40vh;

  }
  @media(max-width:400px){
    width:40vw;

}
  `
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 90,
            stepSize: 10,
          },
        },
      ],
    },
    animation: {
      tension: {
        duration: 1000,
        easing: "ease-in",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  };

  return (
    <BarGraphWrapper >
      <Bar data={data} options={options} />
    </BarGraphWrapper>
  );
}

export default BarGraph;
