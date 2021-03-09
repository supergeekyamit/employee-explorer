import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExploreEmployee from '../../components/ExploreEmployee';
import { useParams } from "react-router-dom";
import * as actions from '../../store/Actions/employeeAction';

const useStyles = makeStyles((theme) => ({
    heading:{
        marginBottom: theme.spacing(2)
    }
}));

const EmployeeExplorer=(props)=>{
    const classes = useStyles();
    const params = useParams();
    const searchedEmployeeName = params.name;
    const employeeSearch=React.useCallback(()=>{
        props.searchEmployee(searchedEmployeeName);
    },[props,searchedEmployeeName]);
    
    React.useEffect(()=>{
        employeeSearch();
    },[]);

    return(
            <Grid>
                <Typography variant="h6" type="h6" className={classes.heading} color="primary">
                    Employee overview
                </Typography>
                <ExploreEmployee 
                    employeeDetails={props.employeeDetails}
                    error={props.error}
                    errorMessage={props.errorMessage}
                    employeeName={searchedEmployeeName}
                />
            </Grid>
        );
}

const mapStateToProps = state => {
    return {
        employeeDetails:state.employeeDetails,
        error: state.error,
        errorMessage: state.errorMessage
    };
}

const mapDispatchToProps = dispatch => {
    return { 
        searchEmployee: (fullName) => dispatch(actions.searchEmpployeeByName(fullName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeExplorer);