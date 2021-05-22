import React from 'react';
import Filter from '../Filter';
import Table from '../Table';

const Dashboard: React.FC = () => {
  return (
    <div>
      Dashboard
      <Filter />
      <hr />
      <Table />
    </div>
  );
};

export default Dashboard;
