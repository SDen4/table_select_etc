import React from 'react';

import Filter from '../Filter';
import Table from '../Table';

import MOCK_DATA from '../../mockData/mockData.json';

const Dashboard: React.FC = () => {
  return (
    <div>
      Dashboard
      <Filter />
      <hr />
      <Table tableData={MOCK_DATA} />
    </div>
  );
};

export default Dashboard;
