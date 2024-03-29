import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import CheckList from '@material-ui/icons/CheckCircle'

import './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '90%',
      backgroundColor: theme.palette.background.paper,
      minHeight: '307px'
    },
    inline: {
      display: 'inline',
    },
    present: {
      height: '22px'
    }
  }),
);

export default function AlignItemsList({ data }: any) {
  const classes = useStyles();

  return ( 
    <List className={classes.root}>
      {data.slice(0,4).map((person: any, index: any) => (
        <Grid className="list-item">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={person.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container direction="column">
                  <Grid >
                    {person.present ?
                      <span className="present">
                        <CheckList className="checklist"/>
                        <span className="text">Hadir</span>
                      </span>
                      :
                      <span className="present">
                        <span className="text">Tidak Hadir</span>
                      </span>
                    }
                  </Grid>
                  <Grid className="name">{person.name}</Grid>
                </Grid>
              }
              secondary={
                <React.Fragment>
                  {person.description}
                </React.Fragment>
              }
            />
            
          </ListItem>
          {index!==data.length-1 && <Divider variant="inset" component="li" />}
        </Grid>
      ))}
    </List>
  );
}