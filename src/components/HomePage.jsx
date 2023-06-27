import millify from 'millify'
import { Typography, Col, Row, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi';
import CryptoCurrencies from './CryptoCurrencies';


const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log(data)
  if (isFetching) return 'Loading....'
  return (
    <div className="container homepage_container">
      <Title level={2} className='title'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title='Total 24hr Value' value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Market Value' value={millify(globalStats.totalMarkets)} /></Col>
        
      </Row>
      <div className='homepage-box'>
        <Title level={2}>Top 10 cryptocurrencies in the world</Title>
        <Title level={5}><Link to='/cryptocurrencies' className='btn' style={{
          color:'white'
        }}>Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified />
      
    </div>
  )
}
export default HomePage