import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/rootReducer';

import Filter from '../Filter';
import Table from '../Table';

const Dashboard: React.FC = () => {
  const dataForTable = useSelector<AppStateType, any>(
    (store) => store.dataForTable,
  );

  const dataForFilter = useSelector<AppStateType, any>(
    (store) => store.dataForFilter,
  );

  return (
    <div>
      Dashboard
      <Filter data={dataForFilter} />
      <hr />
      <Table tableData={dataForTable} />
    </div>
  );
};

export default Dashboard;
