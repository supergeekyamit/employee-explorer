/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const EmployeeSearch=(props)=> {
  const {
    searchEmployee,
    searchHandler,
    employeeSearched
  } = props;

  return (
    <Box display="flex">
        <TextField 
            label="Employee name" 
            variant="outlined"
            id="searchEmployee"
            onChange={searchHandler} 
            value={employeeSearched.searchedName}
        />  
        <Button
            variant="contained"
            color="primary"
            onClick={(e)=>searchEmployee(e,employeeSearched.searchedName)}
        >
            Search
        </Button>
    </Box>
  );
}
export default EmployeeSearch;
