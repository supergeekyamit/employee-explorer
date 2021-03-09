import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import EmployeesSearch from '../../components/EmployeeSearch';
import { useHistory } from "react-router-dom";

const Home =()=>{
    const history = useHistory();
    const [employeeSearched, setSearchedEmp] = useState({
        searchedName: '',
    });

    const searchHandler=(e)=>{
        const data =[];
        data['searchedName'] = e.target.value;
        setSearchedEmp(prevState => ({
            ...prevState,
            ...data
        }));
    }
    const onSearchEmployee=async(e,fullName)=>{
        history.push('/overview/'+fullName);
    }
    
    return(
        <Grid>
            <EmployeesSearch 
                searchEmployee={onSearchEmployee}
                searchHandler={searchHandler}
                employeeSearched={employeeSearched}
            />
        </Grid>
    );
}
export default Home;