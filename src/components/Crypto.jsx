import millify from "millify";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetCryptosDetailsQuery } from "../services/CryptoApi";
import { Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useGetCryptosHistoryQuery } from "../services/CryptoApi";
import LineChart from "./LineChart";
import { Option } from "antd/es/mentions";

const Crypto = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("");
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptosHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;
  console.log(coinHistory);
  if (isFetching) return "Loading...";

  // const time = [
  //   { id: 1, value: "3h" },
  //   { id: 2, value: "24h" },
  //   { id: 3, value: "7d" },
  //   { id: 4, value: "30d" },
  //   { id: 5, value: "3m" },
  //   { id: 6, value: "1y" },
  //   { id: 7, value: "3y" },
  //   { id: 8, value: "5y" },
  // ];
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <section className="container crypto__container">
      <div className="crypto__container__header">
        <h2 className="header__title">
          {cryptoDetails?.name} {cryptoDetails?.symbol}
        </h2>
        <p>
          {cryptoDetails?.name} view prices in US dollars. View value
          statistics, Market Caps and Supply.
        </p>
      </div>
      {/* <select
        onChange={(e) => setTimePeriod(e.target.value)}
        value={timePeriod}
      >
        {time.map((date) => (
          <option key={date.id}>{date.value}</option>
        ))}
      </select> */}
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />

      <div className="crypto__stats__container">
        <div className="crypto__stats">
          <div className="crypto__stats__header">
            <h4>{cryptoDetails?.name} value statistics</h4>
            <p>An Overview showing the statistics of {cryptoDetails?.name}</p>
          </div>
          {stats.map((stat) => {
            return (
              <div key={stat.index} className="list card">
                <h3>{stat.icon}</h3>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>
            );
          })}
        </div>
        <div className="crypto__stats">
          <div className="crypto__stats__header">
            <h4>Other statistics</h4>
            <p>An Overview showing the statistics of all Cryptocurrencies</p>
          </div>
          {genericStats.map((stat) => {
            return (
              <div key={stat.index} className="list card">
                <h3>{stat.icon}</h3>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="coin__links">
        <h3>{cryptoDetails?.name} Links</h3>
        {cryptoDetails?.links?.map((link) => {
          return (
            <div key={link.index} className="list card">
              <p>{link.type}</p>
              <a href={link.url} target={"_blank"} rel="noreferrer">
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Crypto;
