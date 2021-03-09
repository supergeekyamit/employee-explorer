import { takeLatest } from "redux-saga/effects";

import * as actionTypes from "../Actions/actionTypes";

import { searchEmployeeSubordinates } from "./employee";

export function* watchEmployees() { 
  yield takeLatest(actionTypes.SEARCH_EMPLOYEE_BY_NAME, searchEmployeeSubordinates);
}

