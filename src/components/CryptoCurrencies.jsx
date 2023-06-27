import millify from "millify";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosResponse, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setCryptos(cryptosResponse?.data?.coins);
    const filteredData = cryptosResponse?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosResponse, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="input ">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="input__search"
              type="text"
              id="search"
              placeholder="Search cryptocurrencies..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      )}

      <div className="container crypto-container">
        {cryptos?.map((crypto) => {
          const { uuid, rank, name, iconUrl, price, marketCap, change } =
            crypto;
          return (
            <Card id={uuid} image={iconUrl} rank={rank} name={name}>
              <h4> Price: ${millify(price)}</h4>
              <h4> Market Cap: {millify(marketCap)}</h4>
              <h4> Change: {millify(change)}</h4>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default CryptoCurrencies;
