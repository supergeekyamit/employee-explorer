import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Subordinates from '../Subordinates';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  palleteColor: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
  
const ExploreEmployee=(props)=>{
    const {
        employeeDetails,
        error,
        errorMessage,
        employeeName
    } = props;
    
    const getSubordinates=(arr,subordinateType)=>
    Object.values(arr)
    .reduce((r,c)=>c[subordinateType] 
    && [...new Set(c[subordinateType])].map((employeeName,index)=>{
        return (
            <Subordinates employeeName={employeeName} key={index} />
        )
    }));
    
    let directSubordinates, nonDirectSubordinates;
    directSubordinates = employeeDetails && employeeDetails.length > 1 && getSubordinates(employeeDetails,'direct-subordinates');
    nonDirectSubordinates = employeeDetails && employeeDetails.length > 1 && getSubordinates(employeeDetails,'non-direct-subordinates');
    
    const classes = useStyles();
    return(
        <Grid className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          {error && 
            <Alert spacing={4} severity="warning">{errorMessage}</Alert>
          }
          {directSubordinates 
            &&<Grid>
            <Typography variant="h6" className={classes.title}>
              {`Direct subordinates of employee ${employeeName}`}
            </Typography>
            <Grid className={classes.palleteColor}>
              <List dense={false}>
                  {directSubordinates}
              </List>
            </Grid>
            </Grid>}
          {nonDirectSubordinates 
          && <Grid>
                <Typography variant="h6" className={classes.title}>
                {`Non direct subordinates of employee ${employeeName}`}
                </Typography>
                <div className={classes.palleteColor}>
                    <List dense={false}>
                        {nonDirectSubordinates}
                    </List>
                </div>
            </Grid>}
        </Grid>
        </Grid>
        </Grid>
    );
}

export default ExploreEmployee;