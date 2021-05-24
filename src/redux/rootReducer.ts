import MOCK_DATA_NEW from '../mockData/mockDataNew.json';
import { CHANGE_PERIOD } from './constants';

// max value of periods
const maxPeriodIDStr: string = String(
  Math.max.apply(
    null,
    MOCK_DATA_NEW.map((item) => Number(item.id)),
  ),
);

// searh data by max of period
const lastData: any = MOCK_DATA_NEW.find((item) => item.id === maxPeriodIDStr);

const initialState: any = {
  dataForTable: lastData[maxPeriodIDStr],
  dataForFilter: MOCK_DATA_NEW,
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_PERIOD:
      const newData: any = MOCK_DATA_NEW.find(
        (item) => item.id === action.payload,
      );
      return {
        ...state,
        dataForTable: newData[action.payload],
        dataForFilter: MOCK_DATA_NEW,
      };
    default:
      return state;
  }
};

export type AppStateType = ReturnType<typeof rootReducer>;
