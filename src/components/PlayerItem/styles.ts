import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2, 3),
    position: 'relative',
  },
  flex: {
    display: 'flex',
  },
  link: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    border: '1px solid rgba(0,0,0,0.14)',
    '&:hover': {
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  },
  color: {
    color: theme.palette.grey[500],
  },
  content: {
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));
