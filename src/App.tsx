import * as React from 'react';

// css framework
import { Container } from '@material-ui/core';

// components
import Header from './components/Header';
import PlayerList from './components/PlayerList';

const App: React.FC<{}> = () => {
  return (
    <Container maxWidth="md">
      <Header />
      <PlayerList />
    </Container>
  );
};

export default App;
