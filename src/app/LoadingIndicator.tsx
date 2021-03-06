import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
  },
});

function LoadingIndicator() {
  const classes = useStyles();
  const isLoading = useSelector((state) =>
    Object.values(state).some((value) => value.isFetching)
  );

  return isLoading ? (
    <LinearProgress className={classes.root} color="secondary" />
  ) : null;
}

export default LoadingIndicator;
