import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    display: 'flex',
    borderTop: '1px solid #aaa',
    padding: theme.spacing(1, 0),
    justifyContent: 'space-around',
    margin: theme.spacing(1, 0),
  },
}));
