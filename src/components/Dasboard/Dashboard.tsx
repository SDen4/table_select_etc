import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import Table from '../Table';

// import MOCK_DATA from '../../mockData/mockData.json';
import MOCK_DATA_NEW from '../../mockData/mockDataNew.json';

interface DashboardProps {
  dataFromStore: any;
}

const Dashboard: React.FC<DashboardProps> = ({ dataFromStore }) => {
  console.log(dataFromStore);

  return (
    <div>
      Dashboard
      <Filter data={MOCK_DATA_NEW} />
      <hr />
      <Table tableData={dataFromStore} />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    dataFromStore: state.data,
  };
}

export default connect(mapStateToProps)(Dashboard);
