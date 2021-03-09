import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Subordinates=({employeeName, index})=>{
    return (
        <ListItem key={index}>
            <ListItemAvatar>
            <Avatar>
                <AccountCircle />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={employeeName}
            />
        </ListItem>
    )
}
export default Subordinates;