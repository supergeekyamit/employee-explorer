import * as actionTypes from './actionTypes';

export const searchEmpployeeByName = ( employeeName ) => {
    return {
        type: actionTypes.SEARCH_EMPLOYEE_BY_NAME,
        employeeName
    };
};

export const setEmployeeSubordinates=(employeeDetails)=>{
    return {
        type: actionTypes.SET_EMPLOYEE_SUBORDINATES,
        employeeDetails
    };
}

export const fetchEmployeeFailed=()=>{
    return {
        type: actionTypes.GET_EMPLOYEE_FAILED
    };
}