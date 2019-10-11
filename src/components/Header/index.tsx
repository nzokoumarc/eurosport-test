import * as React from 'react';
import { AppBar, Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Header: React.FC<{}> = (props) => {
  const classes = useStyles(props);
  return (
    <AppBar color="primary" className={classes.root}>
      <Container maxWidth="md">
        <Typography color="inherit" variant="body1">
          EUROSPORT | TEST
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
