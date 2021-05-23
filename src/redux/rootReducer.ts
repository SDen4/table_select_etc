import MOCK_DATA_NEW from '../mockData/mockDataNew.json';

// max value of periods
const maxPeriodIDStr: string = String(
  Math.max.apply(
    null,
    MOCK_DATA_NEW.map((item) => Number(item.id)),
  ),
);

// searh data by max of period
const lastData = MOCK_DATA_NEW.find((item) => item.id === maxPeriodIDStr);

const initialState: any = {
  //@ts-ignore
  data: lastData[maxPeriodIDStr],
};

export const rootReducer = (state = initialState, action: any) => {
  return state;
};
