import * as React from 'react';
import axios from 'axios';

import { Typography } from '@material-ui/core';
import { PlayersType } from '../../utils/players';

import PlayerItem from '../PlayerItem';
import { useStyles } from './styles';

export const endpoint: string =
  'https://eurosportdigital.github.io/eurosport-react-native-developer-recruitment/docs/headtohead.json';

const PlayerList: React.FC<{}> = () => {
  const classes = useStyles('');

  const [players, setPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // effect to call function
  React.useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setPlayers(response.data.players);
        setLoading(true);
      })
      .catch(() => {});
  }, []);

  return (
    <div className={classes.root}>
      {!loading && (
        <Typography variant="body1" color="primary" align="center">
          ...loading
        </Typography>
      )}
      {loading && (
        <>
          <Typography variant="h2" color="primary">
            JOUEURS
          </Typography>
          {players.map((item: PlayersType, index: number) => (
            <PlayerItem item={item} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default PlayerList;
