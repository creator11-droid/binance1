import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        stacked: true,
      },
    },
  };

  return (
    <section>
      <div>
        <h2>{coinName} Price Chart</h2>
        <div>
          <h4>Change: {coinHistory?.data?.change}</h4>
          <h4>
            Current {coinName} Price:{currentPrice}
          </h4>
        </div>
      </div>
      <Line data={data} options={options} style={{ width: 1000 }} />
    </section>
  );
};
export default LineChart;
