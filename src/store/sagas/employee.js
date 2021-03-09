import { put } from "redux-saga/effects";

import axios from "axios";
import * as actions from "../Actions/employeeAction"; 

export function* searchEmployeeSubordinates(action) {
  try {
    const responseEmployeeSubordinates = yield axios.get(
        "http://api.additivasia.io/api/v1/assignment/employees/"+action.employeeName
    );
   	
    yield put(actions.setEmployeeSubordinates(responseEmployeeSubordinates.data)); 
  } catch (error) {
      yield put(actions.fetchEmployeeFailed());
  }
}
