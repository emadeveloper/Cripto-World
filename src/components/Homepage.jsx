/* import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from './services/cryptoApi';


const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';
  
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value='5' /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value='5' /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value='5' /></Col>
        <Col span={12}><Statistic title='Total Markets' value='5' /></Col>
      </Row>
    </>
  )
}

export default Homepage */

import React from 'react';
import { useGetCryptosQuery } from './services/cryptoApi';

const Homepage = () => {
  const { data, error, isLoading } = useGetCryptosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  // Verifica si "data" y "data.total" están definidos antes de acceder a ellos
  const total = data && data.total;

  return (
    <div>
      {total && <p>Total: {total}</p>}
      {/* Resto de tu código */}
    </div>
  );
};

export default Homepage;