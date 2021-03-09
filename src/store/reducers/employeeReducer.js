import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    employeeDetails:[],
    error: false,
    errorMessage: ''
}; 

const setEmployeeSubordinates = ( state, action ) => {
    const employeeDetails = action.employeeDetails && 
    action.employeeDetails.length > 1 ? action.employeeDetails: [];
    const error = employeeDetails.length ===0 ? true: false;
    const errorMessage = error ? 'No employee subordinates found for the searched employee.': '';
    return {...state, ...{ 
        employeeDetails,
        error,
        errorMessage
     } };
};

const getEmployeeFailed=( state, action )=>{
    return {...state,
        employeeDetails: [],
        error: true,
        errorMessage: 'No Employee subordinates found for the searched employee!'
    }
}

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case actionTypes.SET_EMPLOYEE_SUBORDINATES: 
        return setEmployeeSubordinates(state, action);
        case actionTypes.GET_EMPLOYEE_FAILED:
            return getEmployeeFailed(state, action);
        default: return state;
    }
};

export default reducer;