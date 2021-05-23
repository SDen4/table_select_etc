import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import Table from '../Table';

import { DashboardProps } from './types';

const Dashboard: React.FC<DashboardProps> = ({
  dataFromStoreForTable,
  dataFromStoreForFilter,
}) => {
  return (
    <div>
      Dashboard
      <Filter data={dataFromStoreForFilter} />
      <hr />
      <Table tableData={dataFromStoreForTable} />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    dataFromStoreForTable: state.dataForTable,
    dataFromStoreForFilter: state.dataForFilter,
  };
}

export default connect(mapStateToProps)(Dashboard);
