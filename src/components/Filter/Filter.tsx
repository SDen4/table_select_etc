import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { FilterProps } from './types';

import { useStyles } from './style';

const Filter: React.FC<FilterProps> = ({ data }) => {
  const [content, setContent] = React.useState(data[data.length - 1].id);

  const classes = useStyles();

  const handleChange = (event: any) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  return (
    <div className={classes.select}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={content}
          onChange={handleChange}
        >
          {data.map((item) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                {item.periodName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
