import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useStyles } from './style';

const Filter: React.FC = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    event.preventDefault();
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <div className={classes.select}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={20211}>1 квартал 2021</MenuItem>
          <MenuItem value={20212}>2 квартал 2021</MenuItem>
          <MenuItem value={20213}>3 квартал 2021</MenuItem>
          <MenuItem value={20214}>4 квартал 2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
