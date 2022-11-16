import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart(props){
   
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      });

    const data = {
        labels: props.labels,
        datasets: [{
            data: props.data,
            fill : true,
            backgroundColor: 'rgba(59, 209, 111, .1)',
            borderColor: 'rgba(59, 209, 111)',
            borderWidth: 1
        }],
    };

    const options = {
        plugins: {
            title: {
            display: true,
            text: 'Portfolio Growth',
            color : 'rgba(59, 209, 111)',
            font: {
                size: 30
            }
        },
        legend: {
            display: false
        },
        subtitle: {
            display: true,
            text: "Final Value: " + formatter.format(props.finalAmount),
            color : 'rgba(255,255,255)',
            font : {
                size : 20
            }
        }
        }
    }


    return(
        <div className="chart-window">
            <Line data={data} options={options}/>
        </div> 
    );
};

export default LineChart;