import React from 'react';

import Filter from '../Filter';
import Table from '../Table';

import MOCK_DATA from '../../mockData/mockData.json';
import MOCK_DATA_NEW from '../../mockData/mockDataNew.json';

const Dashboard: React.FC = () => {
  return (
    <div>
      Dashboard
      <Filter data={MOCK_DATA_NEW} />
      <hr />
      <Table tableData={MOCK_DATA} />
    </div>
  );
};

export default Dashboard;
